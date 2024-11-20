import { createSlice } from '@reduxjs/toolkit';
import { IPost, } from "@/interfaces/PostInterface";
import { MOCK_POSTS } from "@/mockData";

interface PostListState {
    value: number;
    postList: IPost[];
    currentPost: IPost
};

const initialState: PostListState = {
    value: 0,
    postList: MOCK_POSTS,
    currentPost: MOCK_POSTS[0],
};

export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const newPost: IPost = action.payload;
            state.postList = [newPost, ...state.postList];
        },
        setCurrentPostById: (state, action) => {
            const currentPostId = action.payload;
            const postCandidate = state.postList.find(elem => elem.id === currentPostId);
            if (postCandidate) {
                state.currentPost = postCandidate;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { addPost, setCurrentPostById, } = postSlice.actions;

export default postSlice.reducer;