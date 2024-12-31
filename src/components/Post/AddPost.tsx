'use client'

import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import { useRouter } from 'next/navigation';
import { useToast } from "../../context/ToastContext";
import { useTranslation,  } from "next-i18next";
import { addPost, } from '@/features/postSlice';
import { useDispatch, useSelector, } from "react-redux";
import { MAX_POST_TITLE_LENGTH } from "@/constant";
import { IErrorPost, IPost, } from "@/interfaces/PostInterface";
import RippleButton from "../Button/RippleButton";
import { v4 as uuidv4 } from 'uuid';
import { delay, } from '@/util/timeUtil';
import { IRootState } from "@/store";

import { createCommand } from "@/util/commandUtils"; // 命令模式工具
import { createPost } from "@/util/factoryUtils";

import ImageUploader from "./ImageUploader";

// useState：

// 使用 useState 鉤子來儲存圖片的內容，初始值為 [null, null]。
// useRef：

// 使用 useRef 鉤子來獲取文件輸入元素的引用。
// handleImageChange：

// 當選擇圖片時，這個函數會讀取圖片並將其設置為預覽圖。
// handleImageRemove：

// 當點擊右上角的 X 按鈕時，這個函數會移除對應的圖片。
// handleDivClick：

// 當點擊 div 時，這個函數會觸發文件輸入元素的點擊事件，以打開文件選擇對話框。
// 布局：

// 使用 flex 來控制佈局，當裝置寬度在 md 或更大時，divs 會左右排列；當裝置寬度在 xs 時，divs 會上下排列。
// 使用 aspect-square 類確保虛線框框和預覽圖片是正方形。
// 這樣的實現方式可以確保虛線框框和預覽圖片都是正方形，並且大小一致。這樣，當點擊 div 後，
// 可以打開上傳圖片的對話框，選擇圖片後可以預覽圖片，並且可以在圖片的右上方點擊 X 按鈕來刪除圖片。

const AddPost = ({}) => {
  const dispatch = useDispatch();
  const postsFromRedux = useSelector((state: IRootState) => state.post.postList);
 
  const [inputPost, setInputPost] = useState<IPost>(
    {
      id: '', // is determined at factory init phase
      postTitle: '',
      content: '',
      time: '',
      imgUrls: [],
      numLikes: 0,
      favoritedNum: 0,
      commentIds: [],
    }
  );
  const [isEditStatusLocked, setIstEditStatusLocked] = useState(false);
  const [errorPost, setPostError] = useState<IErrorPost>({
    titleError: [false, 'Title cannot be empty.'],
    contentError: [false, ''],
    imageError: [[false, ''],]
  });
  const router = useRouter();
  const [prevPostsLen, setPrevPostLen] = useState<number>(postsFromRedux.length);

  const { showToast } = useToast();

  const onTitleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputPost(oldInput => {
      return {
        ...oldInput,
        postTitle: event.target.value,
      }
    });
  };

  const onContentChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputPost(oldInput => {
      return {
        ...oldInput,
        content: event.target.value,
      }
    });
  };

  const validateInput:() => boolean = () => {
    return true;
    //TODO:
  };

  const handleSave = async() => {
    //驗證輸入合法性   
    if (!validateInput()) {
      showToast("Please fix the errors before saving.");
      return;
    }

    // Dispatch Redux Action: 新增文章
    dispatch(addPost({
      postTitle: inputPost.postTitle,
      content: inputPost.content
    }));
    
    setPrevPostLen(oldLen => (oldLen + 1));
    setIstEditStatusLocked(true);
    await delay(2500);
    showToast(`New post saved successfully!`);    
    localStorage.setItem('postsFromRedux', JSON.stringify(postsFromRedux));
    router.push('/');
  };
  

  return (
    <div className="add-post flex justify-center">
      <div className="input-add-post w-full h-full flex rounded-xl flex-col gap-4 justilfy-center">
      <div className="input-titile-and-error">
        <input value={inputPost.postTitle} type="text" name="input-post-title" autoFocus={true} id="input_post_title" 
          className="w-full rounded-xxl outline-none border-2 border-gray text-lg h-10 p-4"
          onChange={(event) => {onTitleChange(event)}}
          maxLength={MAX_POST_TITLE_LENGTH} placeholder="Title here😎"
          disabled={isEditStatusLocked}
        />
        <span className={`title-error flex pl-4 text-[#d15864] 
          ${inputPost.postTitle.length > 0 ? 'hidden' : ''}`}>
          {errorPost.titleError[1]}
        </span>
      </div>      
        <textarea value={inputPost.content} onChange={event => {onContentChange(event)}}
          className="textarea-post text-left flex outline-none w-full h-60 md:h-100
            p-4 rounded-xxl resize-none border-2 border-gray bg-[#ffffff]"
            disabled={isEditStatusLocked}
        />
        <ImageUploader />
        <div
          className="btn-save btn-bg bg-slate-100 w-full rounded-xxl relative"
        >
          <RippleButton
            displayText={"Save"}
            detail={false}
            withBg={true}
            onClick={handleSave}
            isCentered={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
