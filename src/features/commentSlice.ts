import { createSlice } from '@reduxjs/toolkit';
import { IComment, } from "@/interfaces/PostInterface";
import { MOCK_COMMENTS, } from "@/mockData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface CommentListState {
    value: number;
    commentList: IComment[];
    currentComment: IComment;
};

const initialState: CommentListState = {
    value: 0,
    commentList: [...MOCK_COMMENTS],
    currentComment: MOCK_COMMENTS[0],
};

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        addCommentToCommentList: (state, action) => {
            const newComment: IComment = action.payload;
            return {
                ...state,
                commentList: [newComment, ...state.commentList],
            };
        },
    },
});

// 配置持久化
const commentPersistConfig = {
    key: "comment",
    storage,
};

// Action creators are generated for each case reducer function
export const {
    addCommentToCommentList,
} = commentSlice.actions;

export default persistReducer(
    commentPersistConfig,
    commentSlice.reducer
);