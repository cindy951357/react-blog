import React, { useState, useEffect } from "react";

interface RippleButtonProps {
  displayText: string;
  detail: boolean;
  withBg: boolean;
  onClick: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  displayText,
  detail = true,
  withBg = false,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 檢測裝置類型
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    if (
      /android/i.test(userAgent) ||
      (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream)
    ) {
      setIsMobile(true);
    }
  }, []);

  const handleMouseOver = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    onClick();
    if (isMobile) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div
      className={`flex w-full justify-center items-center
      rounded-xxl absolte ${withBg ? "bg-slate-200" : ""}`}
    >
      <div
        className={`parent relative w-full h-20 overflow-hidden cursor-pointer`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        <div
          className={`circle absolute top-1/2 left-1/2 bg-opacity-80 rounded-xxl 
            transform -translate-x-1/2 -translate-y-1/2 transition-all
            duration-500 ease ${
              isHovered
                ? "w-full h-full rounded-none bg-second-300"
                : "w-0 h-0 bg-second-300"
            }`}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <span className="relative display-text break-all max-w-[200px] md:max-w-full">
            {displayText}
          </span>
        </div>
        {detail && (
          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 
          text-xs pointer-events-none"
          >
            檢視更多
          </div>
        )}
      </div>
    </div>
  );
};

export default RippleButton;
// 類名切換：

// 當 isHovered 為 true 時，應用的類名為 w-full h-full rounded-none bg-second-300，
//這會使圓形擴展到填滿父容器並變成矩形。
// 當 isHovered 為 false 時，應用的類名為 w-0 h-0 bg-second-300，這會使圓形縮小到幾乎不可見的大小。

// 檢測裝置類型：

// 使用 useEffect 鉤子檢測使用者的裝置類型。如果檢測到使用者代理字符串中包含 Android 或 iOS 裝置的資訊，則將 isMobile 狀態設置為 true。
// 事件處理程序：

// handleMouseOver 和 handleMouseOut 事件處理程序僅在非行動裝置上觸發。
// handleClick 事件處理程序僅在行動裝置上觸發，並且切換 isHovered 狀態。
// 動畫效果：

// 當 isHovered 為 true 時，圓形會擴展成撐滿 parent 容器的矩形。
// 當 isHovered 為 false 時，圓形會縮小回原本的狀態。
// 這樣，當使用者在行動裝置上點擊時，小圓點會擴散成撐滿矩形的效果，而在桌面裝置上則會根據滑鼠的 mouseover 和 mouseout 事件來觸發相同的效果。

// -translate-x-1/2 和 -translate-y-1/2 的用途
// -translate-x-1/2 和 -translate-y-1/2 是 Tailwind CSS 中的實用類，用於將元素在水平方向和垂直方向上分別平移自身寬度和高度的一半。其主要作用是將絕對定位的元素的中心點與其父元素的中心點對齊。

// 在 CSS 中，transform 屬性的 translate 函數可以用來平移元素。具體來說，-translate-x-1/2 和 -translate-y-1/2 分別相當於以下 CSS：

// transform: translateX(-50%); /* -translate-x-1/2 */
// transform: translateY(-50%); /* -translate-y-1/2 */
