import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import GlowButton from "./Button/GlowButton";
import { useActivePage } from "@/context/ActivePageContext";

const Menu: React.FC = () => {
  const router = useRouter();
  const { activePage, setActivePage } = useActivePage();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="menu-container flex justify-center gap-2 mt-4">
      <div className="dummy-div"></div>
      <div className="col-span-4">
        <div className="menu flex gap-2 border-b-2 border-white">
          <Link href="/">
            <GlowButton
              btnText={"Home"}
              color={activePage === "/" ? "LavenderBlush" : "defaultColor"}
              onClick={() => {
                setActivePage("home");
                navigateTo("/");
              }}
            />
          </Link>
          <Link href="/write">
            <GlowButton
              btnText={"Write"}
              color={activePage === "/write" ? "LavenderBlush" : "defaultColor"}
              onClick={() => {
                setActivePage("write");
                navigateTo("/write");
              }}
            />
          </Link>
          <Link href="/about/site-intro">
            <GlowButton
              btnText={"About"}
              color={
                activePage === "/about/site-intro"
                  ? "LavenderBlush"
                  : "defaultColor"
              }
              onClick={() => {
                setActivePage("about");
                navigateTo("/about/site-intro");
              }}
            />
          </Link>
          <div className="dummy-div"></div>
        </div>
        <div className="dummy-div"></div>
      </div>
    </div>
  );
};

export default Menu;
