import React, { ReactNode } from "react";
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
      <ActivePageProvider>
        <CommentProvider>
          <ToastProvider>
            <PostProvider>
              {children}              
            </PostProvider>
          </ToastProvider>
        </CommentProvider>
      </ActivePageProvider>
    </React.StrictMode>
  );
};

export default AppProvider;
