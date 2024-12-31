import { ReactNode } from "react";
import Menu from "./Menu"; // 主選單
import AboutMenu from "../About/AboutMenu"; // About 頁面的子選單

type AboutLayoutProps = {
  children: ReactNode;
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div className="about-layout grid grid-cols-[1fr_20fr_1fr_1fr] h-full">
      <div className="dummy about-dummy"></div>
      <div className="about-main bg-white rounded-xl mr-2 h-full p-2">
        {children}
      </div>
      <div className="about-menu-container h-[500px] mb-2">
        <AboutMenu />
      </div>
      <div className="dummy about-dummy"></div>
    </div>
  );
};

export default AboutLayout;
