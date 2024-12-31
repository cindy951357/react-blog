import React, { ReactNode } from "react";
import { store } from '../store';
import { Provider } from 'react-redux'
import { ActivePageProvider } from "./ActivePageContext";
import { CommentProvider } from "./CommentContext";
import { ToastProvider } from "./ToastContext";
import { PostProvider, usePosts } from "./PostContext";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <React.StrictMode>
       <Provider store={store}>
        <ActivePageProvider>
          <CommentProvider>
            <ToastProvider>
              <PostProvider>
                {children}              
              </PostProvider>
            </ToastProvider>
          </CommentProvider>
        </ActivePageProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default AppProvider;
