import React from "react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import { MenuLink } from "components/MenuLink";
import { StellarWallet } from "components/Wallets/StellarWallet";

export const Header: React.FC = () => (
  <header className="h-20 grid grid-cols-7 place-content-center">
    <div className="col-span-3 justify-self-start self-center">
      <MenuLink href="/about">about</MenuLink>
      <MenuLink href="/">menu #2</MenuLink>
      <MenuLink href="/">menu #3</MenuLink>
    </div>
    <div className="justify-self-center self-center">
      <Link href="/">
        <a className="no-underline font-serif font-semibold">blog title</a>
      </Link>
    </div>
    <div className="col-span-3 justify-self-end">
      <div className="flex items-center self-center">
        <StellarWallet />
        <RainbowConnectButton
          label="Connect Wallet"
          showBalance={false}
          chainStatus="icon"
          accountStatus="avatar"
        />
      </div>
    </div>
  </header>
);
