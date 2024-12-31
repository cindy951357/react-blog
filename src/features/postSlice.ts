import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, IComment, } from "@/interfaces/PostInterface";
import { MOCK_POSTS, MOCK_COMMENTS, } from "@/mockData";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";


// Factory Pattern，用於統一文章初始化
// createPost 負責初始化單篇文章（IPost）
// addPost reducer 則是專注於新增一篇文章到清單的邏輯
// 工廠函數，用於生成單篇文章
const createPost = (
    postTitle: string,
    content: string,
    initialLikes: number = 0,            // 支持自定義初始按讚數量
    initialBookmarks: number = 0    // 支持自定義初始收藏數量
): IPost => {
    return {
        id: Date.now().toString(), // 使用當前時間戳作為唯一 ID
        postTitle,          // 設定文章標題
        content,                   // 設定文章內容
        time: new Date().toISOString(), // 自動生成發布時間
        numLikes: initialLikes,               // 初始按讚數量為 0
        numBookmarked: initialBookmarks,        // 初始收藏狀態
        imgUrls: [],               // 圖片列表，初始化為空
        commentIds: [],            // 評論 ID 列表，初始化為空
    };
};
interface PostListState {
    value: number;
    postList: IPost[];
    currentPost: IPost;
    imagesToUpload: Array<any>;
    commentList: IComment[];
    commandHistory: Command<IPost[]>[]; // 記錄命令歷史
};

// Redux State
const initialState: PostListState = {
    value: 0,
    postList: MOCK_POSTS,
    currentPost: MOCK_POSTS[0],
    imagesToUpload: [],
    commentList: MOCK_COMMENTS,
    commandHistory: [],
};

export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const { postTitle, content } = action.payload;
            // 使用工廠方法初始化基礎文章
            const newPost: IPost = createPost(postTitle, content);
            // 在這裡融入上傳的圖片
            // 在此處賦值 imgUrls，並添加到文章列表
            newPost.imgUrls = state.imagesToUpload;
            state.postList = [newPost, ...state.postList];
        },
        // 從使用者本地儲存設置 Redux Post 資料來源
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
        // 按讚文章
        likePost: (state, action: PayloadAction<string>) => {
            const post = state.postList.find((p) => p.id === action.payload);
            if (post) {
                post.numLikes += 1;
            }
        },
        // 收藏文章
        bookmarkPost: (state, action: PayloadAction<string>) => {
            const post = state.postList.find((p) => p.id === action.payload);
            if (post) {
                post.numBookmarked += 1;
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
    likePost,
    bookmarkPost,
} = postSlice.actions;

export default persistReducer(
    postPersistConfig,
    postSlice.reducer
);