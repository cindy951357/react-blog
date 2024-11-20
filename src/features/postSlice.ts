import { createSlice } from '@reduxjs/toolkit';
import { IPost, } from "@/interfaces/PostInterface";
import { MOCK_POSTS } from "@/mockData";

interface PostListState {
    value: number;
    postList: IPost[];
    currentPost: IPost;
    imagesToUpload: Array<any>;
};

const initialState: PostListState = {
    value: 0,
    postList: MOCK_POSTS,
    currentPost: MOCK_POSTS[0],
    imagesToUpload: [],
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
    },
});

// Action creators are generated for each case reducer function
export const {
    addPost,
    setCurrentPostById,
    setImagesToUpload,
} = postSlice.actions;

export default postSlice.reducer;