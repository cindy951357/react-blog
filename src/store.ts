import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from '@/features/postSlice';


const rootReducer = combineReducers({
    //combine all reducers
    post: postReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;