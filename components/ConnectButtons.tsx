import utilStyles from "styles/utils.module.css";

import React from "react";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";

import { StellarWallet } from "components/Wallets/StellarWallet";

// to include the following wallets:
// stellar
// tezos

export const ConnectButtons: React.FC = () => {
  return (
    <div className={utilStyles.connectbuttons}>
      <div className={utilStyles.connectwallet}>
        <RainbowConnectButton
          label="Connect with ETH"
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </div>
      <StellarWallet />
    </div>
  );
};
