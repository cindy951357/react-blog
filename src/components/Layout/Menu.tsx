import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PlainButton from "../Button/PlainButton";
import { useActivePage } from "@/context/ActivePageContext";

const menuItems = ["/", "/write", "/about/site-intro"];

const Menu: React.FC = () => {
  const { activePage, setActivePage } = useActivePage();
  const router = useRouter();
  const activeIndex = menuItems.indexOf(activePage);
  const [linkWidths, setLinkWidths] = useState<number[]>([]);
  const [leftOffset, setLeftOffset] = useState<number>(0);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const updateWidths = () => {
      const linkElements = document.querySelectorAll(
        ".link-href-container > a"
      );
      const widths = Array.from(linkElements).map(
        (link) => (link as HTMLElement).offsetWidth
      );
      setLinkWidths(widths); // 每個連結按鈕的寬度不會等長
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  useEffect(() => {
    const leftOffset = linkWidths
      .slice(0, activeIndex)
      .reduce((acc, width) => acc + width, 0);

    setLeftOffset(leftOffset);

    const movingLine = document.getElementById(
      "moving_menu_line"
    ) as HTMLElement;
    if (movingLine) {
      movingLine.style.width = `${linkWidths[activeIndex]}px`;
    }
  }, [activeIndex, linkWidths]);

  return (
    <div className="menu-container flex justify-center  md:grid-cols-12">
      <div className="dummy-div md:col-span-1"></div>
      <div className="md:col-span-10">
        <div className="menu flex flex-col">
          {/**sliding-menu-line-container 與  link-href-container 之間是 flex-col 的架構*/}
          <div className="link-href-container flex">
            <Link href="/" legacyBehavior>
              <a>
                <PlainButton
                  btnText={"Home"}
                  color={activePage === "/" ? "LavenderBlush" : ""}
                  onClick={() => {
                    setActivePage("/");
                    navigateTo("/");
                  }}
                />
              </a>
            </Link>
            <Link href="/write" legacyBehavior>
              <a>
                <PlainButton
                  btnText={"Write a Post"}
                  color={
                    activePage === "/write" ? "LavenderBlush" : ""
                  }
                  onClick={() => {
                    setActivePage("/write");
                    navigateTo("/write");
                  }}
                />
              </a>
            </Link>
            <Link href="/about/site-intro" legacyBehavior>
              <a>
                <PlainButton
                  btnText={"About"}
                  color={
                    activePage === "/about/site-intro"
                      ? "LavenderBlush"
                      : ""
                  }
                  onClick={() => {
                    setActivePage("/about/site-intro");
                    navigateTo("/about/site-intro");
                  }}
                />
              </a>
            </Link>
          </div>
          {linkWidths.length === menuItems.length && (
            <div
              className="sliding-menu-line-container flex h-1 relative m-0 p-0
                flex justify-center"
            >
              <div className="background-line w-full flex justify-center">
                <div
                  id="moving_menu_line"
                  className="moving-menu-line h-2 bg-rose-500 flex justify-center"
                  style={{
                    left: `${leftOffset}px`,
                  }}
                ></div>
              </div>
            </div>
          )}
          <div className="dummy-div"></div>
        </div>
        <div className="dummy-div  md:col-span-1"></div>
      </div>
    </div>
  );
};

export default Menu;
