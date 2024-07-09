import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useActivePage } from "@/context/ActivePageContext";
import PlainButton from "./Button/PlainButton";


const menuItems = ["/contact", "/site-intro"];
const AboutMenu = () => {
  const router = useRouter();
  const { activeAboutPage, setActiveAboutPage } = useActivePage();
  const activeIndex = menuItems.indexOf(activeAboutPage);
  const [linkVerticalHeights, setLinkHeights] = useState<number[]>([]);
  const [topOffset, setTopOffset] = useState<number>(0);

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
      console.log('TODO:',heights)
      setLinkHeights(heights);
    };

    updateLineHeights();
    window.addEventListener("resize about menu", updateLineHeights);
    return () => {
      window.removeEventListener("resize about menu", updateLineHeights);
    };
  }, []);

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
    <nav id='about_menu flex flex-row'>
      {/**sliding-about-menu-line-container 與  aboutlink-href-container 之間是 flex-row 的關係*/}
      {linkVerticalHeights.length === menuItems.length && (
          <div className="sliding-about-menu-line-container flex h-full w-2 relative mr-0">
            <div className="background-line h-full">
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
      <ul className='about-link-href-container flex flex-col'>        
        <li className='flex'>
          <Link href="/about/site-intro" legacyBehavior>
            <a>
                <PlainButton
                  btnText={"Contact"}
                  color={
                    activeAboutPage === "/about/contact" ? "LavenderBlush" : "defaultColor"
                  }
                  onClick={() => {
                    setActiveAboutPage("/contact");
                    navigateTo("/about/contact");
                  }}
                />
              </a>
          </Link>
        </li>
        <li className='flex'>
        <Link href="/about/site-intro" legacyBehavior>
            <a>
                <PlainButton
                  btnText={"Site Intro"}
                  color={
                    activeAboutPage === "/about/site-intro" ? "LavenderBlush" : "defaultColor"
                  }
                  onClick={() => {
                    setActiveAboutPage("/site-intro");
                    navigateTo("/about/site-intro");
                  }}
                />
              </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AboutMenu;
