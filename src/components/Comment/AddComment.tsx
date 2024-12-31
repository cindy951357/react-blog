import React, { useEffect, useState, } from "react";
import { useTranslation, } from "react-i18next";
import RippleButton from "../Button/RippleButton";
import { useDispatch, } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { addCommentToPost } from "@/features/postSlice";
import { addCommentToCommentList } from "@/features/commentSlice";
import { useRouter } from "next/router";
import { useToast } from "@/context/ToastContext";
import { delay } from "@/util/timeUtil";

const AddComment: React.FC<AddCommentProps> = ({ postId, }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const { showToast } = useToast();

    const IDString = uuidv4();
    const [isVisible, setIsVisible] = useState(false); // 控制動畫顯示
    const [comment, setComment] = useState({
        id: IDString.toString(),
        postId: postId,
        author: 'Nicole',
        time: '',
        content: '',
        numLikes: 0,
    }); // 儲存留言內容
    const [hydrated, setHydrated] = useState(false); // 用於確保 CSR 階段再渲染動畫
    const [isEditStatusLocked, setIstEditStatusLocked] = useState(false);

    useEffect(() => {
        setHydrated(true); // 客戶端渲染時設置 hydrated 為 true
    }, []);

    const toggleCommentBox = () => {
        setIsVisible(!isVisible); // 切換狀態
    };

    const handleSubmit = async() => {
        if (comment.content.trim() === "") {
            return;
        }
        setIstEditStatusLocked(true);
        const now = moment();
        const time = now.format('YYYY/MM/DDTHH:mm:ss');
        setComment((oldCommentState) => ({
            ...oldCommentState,
            time,
        }));
        await dispatch(addCommentToCommentList({
            ...comment,
            time,
        }))
        await dispatch(addCommentToPost({postId, commentId: comment.id}));
        setIsVisible(false); // 收回留言框
        setIstEditStatusLocked(true);        
        await delay(2500);
        showToast(t("Comment.SaveMsg"));
        router.push('/');
    };

    if (!hydrated) {
        // 伺服器端渲染時，僅返回靜態內容，避免動畫不一致
        return null;
    }

    const onCommentInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment((oldComment) => ({
            ...oldComment,
            content: event.target.value,
        }));
    }

    return <div className="add-comment flex flex-col">
        {/* 切換按鈕 */}
        <div className="button-wrapper flex w-full">
            <button
                onClick={toggleCommentBox}
                className={`comment-toggle-btn w-full h-20
                text-white py-2 px-4 rounded-xxl mb-4
                ${ isVisible ? 'bg-cancel' : 'bg-secondary-300'}`}
            >
                {isVisible ? t("Common.Cancel") : t("Comment.AddNew")}
            </button>
        </div>        
        
        {/* 留言框 */}
        <div
            className={`comment-box transition-[max-height,opacity] duration-500
                ease-in-out overflow-hidden w-full flex flex-col
                ${ isVisible ? "max-h-[280px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <textarea
                className="w-full p-4 border border-gray-300 rounded-m my-4 resize-none
                    flex text-xl"
                rows={4}
                placeholder={t("Comment.Placeholder")}
                value={comment.content}
                onChange={(e) => {onCommentInputChange(e)}}
                contentEditable={!isEditStatusLocked}
            />
            <RippleButton
                displayText={t("Common.Submit")}
                detail={false}
                withBg={true}
                onClick={handleSubmit}
                isCentered
            />
      </div>
    </div>
};

export default AddComment;