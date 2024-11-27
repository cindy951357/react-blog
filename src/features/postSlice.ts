import { createSlice } from '@reduxjs/toolkit';
import { IPost, IComment, } from "@/interfaces/PostInterface";
import { MOCK_POSTS, MOCK_COMMENTS, } from "@/mockData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface PostListState {
    value: number;
    postList: IPost[];
    currentPost: IPost;
    imagesToUpload: Array<any>;
    commentList: IComment[];
};

const initialState: PostListState = {
    value: 0,
    postList: MOCK_POSTS,
    currentPost: MOCK_POSTS[0],
    imagesToUpload: [],
    commentList: MOCK_COMMENTS,
};

export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const newPost: IPost = action.payload;
            // 在這裡融入上傳的圖片
            state.postList = [{
                ...newPost,
                imgUrls: state.imagesToUpload,
            }, ...state.postList];
        },
        setReduxPostSourceFromLocalStorage: (state, action) => {
            state.postList = [...action.payload];
        },
        setCurrentPostById: (state, action) => {
            const currentPostId = action.payload;
            const postCandidate = state.postList.find(elem => elem.id === currentPostId);
            if (postCandidate) {
                state.currentPost = postCandidate;
            }
        },
        setImagesToUpload: (state, action) => {
            const { blobUrl, index } = action.payload;
            const newimagesToUpload: Array<any> = [
                ...state.imagesToUpload.slice(0, index),
                blobUrl,
                ...state.imagesToUpload.slice(index)
            ];
            state.imagesToUpload = newimagesToUpload;
        },
        addCommentToPost(state, action) {
            const { postId, commentId, } = action.payload;
            const postToModify = state.postList.find((p: IPost) => p.id === postId);
            if (postToModify) {
                // 更新 Post 的 commentIds
                postToModify.commentIds = [...postToModify.commentIds, commentId];
            }
        },
    },
});

// 配置持久化
const postPersistConfig = {
    key: "post",
    storage,
};

// Action creators are generated for each case reducer function
export const {
    addPost,
    setCurrentPostById,
    setImagesToUpload,
    setReduxPostSourceFromLocalStorage,
    addCommentToPost,
} = postSlice.actions;

export default persistReducer(
    postPersistConfig,
    postSlice.reducer
);