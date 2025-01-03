import { useTranslation } from "react-i18next";
import Link from "next/link";
import React, { useState } from "react";
import { nunito } from "@/util/fontUtil";
import { useToast } from "@/context/ToastContext";

// 工廠模式：根據登入與否生成不同按鈕
const createButton = (isLoggedIn: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined) => {
  const { t, ready } = useTranslation();

  if (isLoggedIn) {
    //登入下的情境
    return ready && (
      <button
        onClick={onClick}
        className="flex items-center px-4 py-2 hover:bg-gray-300
        z-999"
      >
        <img
          src="/icons/avatar.png"
          alt="User Avatar"
          className="w-4 h-4 rounded-full"
        />
      </button>
    );
  }
  //登出下的情境
  return ready && (
    <div className={`flex gap-2 z-999 ${nunito.className}`}>
      <Link href="/login" legacyBehavior>
          <button
          onClick={onClick}
          className="px-4 py-2 hover:bg-gray-300"
        >
          {t("Common.Login")}
        </button>
      </Link>
      <Link href="/register" legacyBehavior>
          <button
          onClick={onClick}
          className="px-4 py-2 hover:bg-gray-300"
        >
          {t("Common.Register")}
        </button>
      </Link>
    </div>
  );
};

// 抽象工廠模式：根據登入與否生成不同下拉選單
const createMenu = (isLoggedIn: boolean,
  handleProfileClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  handleLogoutClick: React.MouseEventHandler<HTMLButtonElement> | undefined,) => {
  if (isLoggedIn) {
    return (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md
        z-999 shadow-lg py-1">
        <button
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          onClick={handleProfileClick}
        >
          Profile Settings
        </button>
        <button
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>
    );
  }
  return null;
};

// 命令模式：封裝操作
const createCommand = (execute: () => void) => ({ execute });

const handleProfileCommand = createCommand(() =>
  console.log("Navigating to Profile Settings...")
);
const handleLogoutCommand = createCommand(() =>
  console.log("Logging out...")
);

// 狀態管理：主組件
const UserMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { showToast } = useToast();
  const { t } = useTranslation();

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleRegisterClick = () => console.log("Navigating to Register Page");
  const handleProfileClick = () => handleProfileCommand.execute();
  const handleLogoutClick = () => {
    handleLogoutCommand.execute();
    showToast(t('Common.LogoutMsg'));
    setIsLoggedIn(false); // 切換至未登入狀態
    setIsMenuOpen(false); // 關閉菜單
  };

  return (
    <div className="user-menu relative">
      {createButton(isLoggedIn, isLoggedIn ? handleToggleMenu : handleRegisterClick)}
      {isMenuOpen &&
        createMenu(isLoggedIn, handleProfileClick, handleLogoutClick,)}
    </div>
  );
};

export default UserMenu;

