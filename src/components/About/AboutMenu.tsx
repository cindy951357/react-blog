import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useActivePage } from "@/context/ActivePageContext";
import PlainButton from "../Button/PlainButton";

const menuItems = [
  {
    pageName: "Site Intro",
    href: "/about/site-intro",
  },
  {
    pageName: "Contact",
    href: "/about/contact",
  },
  {
    pageName: "Language Setting",
    href: "/about/language-setting",
  },
];
const AboutMenu = () => {
  const router = useRouter();
  const { activeAboutPage, setActiveAboutPage } = useActivePage();
  const activeIndex = menuItems.findIndex(
    (item) => item.pageName === activeAboutPage
  );
  const [linkVerticalHeights, setLinkHeights] = useState<number[]>([]);
  const [topOffset, setTopOffset] = useState<number>(0);
  const [totalLinkHeight, setTotalLinkHeight] = useState<number>(152);

  const navigateTo = (path: string) => {
    router.push(path);
  };
  useEffect(() => {
    const updateLineHeights = () => {
      const linkElements = document.querySelectorAll(
        ".about-link-href-container a"
      );
      const heights = Array.from(linkElements).map(
        (link) => (link as HTMLElement).offsetHeight
      );

      // 加總所有連結按鈕的高度
      const totalHeight = heights.reduce((acc, height) => acc + height, 0);
      setLinkHeights(heights);
      setTotalLinkHeight(totalHeight);
    };

    updateLineHeights();
    window.addEventListener("resize-abut-menu", updateLineHeights);

    return () => {
      window.removeEventListener("resize-about-menu", updateLineHeights);
    };
  }, []);

  /**
   * 計算要移動的垂直偏移量（topOffsetToBe）：
    取出 linkVerticalHeights 陣列中從第 0 項到目前選中的索引（activeIndex）的所有高度，並加總。
    這個加總結果就是線條需要移動的垂直距離（topOffsetToBe）。
    設定偏移量：

    用 document.getElementById 找到名為 moving_about_menu_line 的 DOM 元素。
    如果找到該元素，就改變它的高度為目前選中項目的高度（linkVerticalHeights[activeIndex]）。
   */
  useEffect(() => {
    const topOffsetToBe = linkVerticalHeights
      .slice(0, activeIndex)
      .reduce((acc, height) => acc + height, 0);

    setTopOffset(topOffsetToBe);

    const movingLine = document.getElementById(
      "moving_about_menu_line"
    ) as HTMLElement;
    if (movingLine) {
      movingLine.style.height = `${linkVerticalHeights[activeIndex]}px`;
    }
  }, [activeIndex, linkVerticalHeights]);

  return (
    <nav id="about_menu relative flex flex-row">
      {/**sliding-about-menu-line-container 與  aboutlink-href-container 之間是 flex-row 的關係*/}
      {/** 不知道為什麼一個要 w-1 另一個要 w-2 */}
      <div className={`invariant-bg-line-absolute absolute 
        h-[${totalLinkHeight}px] w-1 
        flex bg-neutral-300 p-0 m-0`}>
        {linkVerticalHeights.length === menuItems.length && (
          <div className="sliding-about-menu-line-container flex w-2 relative mr-0 flex">
            <div className="background-line h-full bg-neutral-200">
              <div
                id="moving_about_menu_line"
                className="moving-about-menu-line bg-rose-500"
                style={{
                  top: `${topOffset}px`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
      <ul className="about-link-href-container flex flex-col">
        {menuItems.map((item) => (
          <li key={item.pageName} className="flex">
            <Link href={item.href} legacyBehavior>
              <a>
                <PlainButton
                  btnText={item.pageName}
                  color={
                    activeAboutPage === item.href
                      ? "LavenderBlush"
                      : "defaultColor"
                  }
                  onClick={() => {
                    setActiveAboutPage(item.pageName);
                    navigateTo(item.href);
                  }}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AboutMenu;
