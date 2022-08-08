import React from "react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import { MenuLink } from "components/MenuLink";
import { ShopWithStellar } from "components/ShopWithStellar";

export const DesktopHeader: React.FC = () => (
  <nav className="h-20 grid grid-cols-7 place-content-center">
    <div className="col-span-3 justify-self-start self-center">
      <MenuLink href="/" />
      <MenuLink href="/" />
      <MenuLink href="/about">about</MenuLink>
    </div>
    <Link href="/">
      <a className="justify-self-center self-center font-serif font-semibold">
        Your Site Title
      </a>
    </Link>
    <div className="col-span-3 justify-self-end">
      <div className="flex items-center self-center">
        <ShopWithStellar />
        <div className="min-w-10">
          <RainbowConnectButton
            label="Connect Wallet"
            showBalance={false}
            chainStatus="icon"
            accountStatus="avatar"
          />
        </div>
      </div>
    </div>
  </nav>
);
