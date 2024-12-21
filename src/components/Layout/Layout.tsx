import React, { memo, ReactNode } from "react";
import Menu from "./Menu";
import { useTranslation } from "next-i18next";
import Header from "./Header";
import Footer from "./Footer";
import { usePosts } from "@/context/PostContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = memo(({ children }) => {
  const { t } = useTranslation("");
  const { addPost, posts, } = usePosts();


  return (
    <div className="layout header-main-footer flex flex-col h-full">
      <Header />
      <div className="flex menu-and-content flex-col h-full-minus-footer w-full">
        <Menu />
        <div className="content main-content-layout flex justify-center w-full">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default Layout;
