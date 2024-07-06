import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import GlowButton from "./Button/GlowButton";
import { useActivePage } from "@/context/ActivePageContext";

const menuItems = ["/", "/write", "/about/site-intro"];

const Menu: React.FC = () => {
  const router = useRouter();
  const { activePage, setActivePage } = useActivePage();
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
      setLinkWidths(widths);
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
    <div className="menu-container flex justify-center gap-2 mt-4">
      <div className="dummy-div"></div>
      <div className="col-span-4">
        <div className="menu flex flex-col">
          <div className="link-href-container flex">
            <Link href="/" legacyBehavior>
              <a>
                <GlowButton
                  btnText={"Home"}
                  color={activePage === "/" ? "LavenderBlush" : "defaultColor"}
                  onClick={() => {
                    setActivePage("/");
                    navigateTo("/");
                  }}
                />
              </a>
            </Link>
            <Link href="/write" legacyBehavior>
              <a>
                <GlowButton
                  btnText={"Write"}
                  color={
                    activePage === "/write" ? "LavenderBlush" : "defaultColor"
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
                <GlowButton
                  btnText={"About"}
                  color={
                    activePage === "/about/site-intro"
                      ? "LavenderBlush"
                      : "defaultColor"
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
            <div className="sliding-menu-line-container flex h-2 relative">
              <div className="background-line w-full">
                <div
                  id="moving_menu_line"
                  className="moving-menu-line h-2 bg-rose-500"
                  style={{
                    left: `${leftOffset}px`,
                  }}
                ></div>
              </div>
            </div>
          )}
          <div className="dummy-div"></div>
        </div>
        <div className="dummy-div"></div>
      </div>
    </div>
  );
};

export default Menu;
