import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 使用 localStorage
import postReducer from '@/features/postSlice';
import commentReducer from '@/features/commentSlice';

const persistConfig = {
    key: "blog-root",
    storage,
};

const postPersistConfig = {
    key: "post",
    storage,
};

const commentPersistConfig = {
    key: "comment",
    storage,
};

const rootReducer = combineReducers({
    //combine all reducers
    post: persistReducer(postPersistConfig, postReducer),
    comment: persistReducer(commentPersistConfig, commentReducer),
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedRootReducer,
    devTools: process.env.NODE_ENV !== "production", // 开发环境启用 Redux DevTools
});

export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;