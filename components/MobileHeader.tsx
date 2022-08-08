import navStyles from "styles/nav.module.css";

import React, { useState } from "react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import { MenuLink } from "components/MenuLink";

const HamburgerMenu: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
  isWhite?: Boolean;
}> = ({ onClick, isWhite }) => (
  <button
    className={`${navStyles.hamburgerMenu} ml-8`}
    type="button"
    onClick={onClick}
  >
    <span
      className={`${
        isWhite ? navStyles.hamburger_white : navStyles.hamburger
      } ${navStyles.hamburgerTop}`}
    ></span>
    <span
      className={`${
        isWhite ? navStyles.hamburger_white : navStyles.hamburger
      } ${navStyles.hamburgerMiddle}`}
    ></span>
    <span
      className={`${
        isWhite ? navStyles.hamburger_white : navStyles.hamburger
      } ${navStyles.hamburgerBottom}`}
    ></span>
  </button>
);

export const MobileHeader: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      {isNavExpanded && (
        <div className="fixed bg-slate-800 top-0 h-full w-full z-20">
          <nav className="flex w-full top-0 h-20 justify-end pr-10">
            <HamburgerMenu
              isWhite
              onClick={() => {
                setIsNavExpanded(false);
              }}
            />
          </nav>

          <div className="flex flex-col h-3/6	justify-around text-slate-100">
            <MenuLink href="/about">about</MenuLink>
            <MenuLink href="/shop">shop</MenuLink>
          </div>
        </div>
      )}
      <nav className="fixed grid grid-cols-2 justify-around w-full top-0 h-20 bg-slate-100 z-10">
        <Link href="/">
          <a className="justify-self-start ml-10 self-center font-serif font-semibold">
            Your Site Title
          </a>
        </Link>
        <div className="flex justify-self-end self-center mr-10">
          <RainbowConnectButton
            label="Connect"
            showBalance={false}
            chainStatus="icon"
            accountStatus="avatar"
          />
          <HamburgerMenu
            onClick={() => {
              setIsNavExpanded(true);
            }}
          />
        </div>
      </nav>
    </div>
  );
};
