import React, { ReactNode } from "react";
import { ActivePageProvider } from "./ActivePageContext";
import { CommentProvider } from "./CommentContext";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ActivePageProvider>
      <CommentProvider>{children}</CommentProvider>
    </ActivePageProvider>
  );
};

export default AppProvider;
