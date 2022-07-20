import utilStyles from "styles/utils.module.css";

import React, { useEffect, useState } from "react";
import { isConnected } from "@stellar/freighter-api";
import Image from "next/image";

import { getFreighterPublicKey } from "helpers/getFreighterPublicKey";
import { shortenStellarAddress } from "helpers/shortenStellarAddress";

export const StellarWallet: React.FC = () => {
  const [hasFreighter, checkHasFreighter] = useState<Boolean>(false);
  const [publicKey, getPublicKey] = useState<string>("");

  useEffect(() => {
    if (isConnected()) {
      checkHasFreighter(true);
    } else {
      checkHasFreighter(false);
    }
  }, []);

  const onConnectToFreighter = async () => {
    const userPublicKey = await getFreighterPublicKey();

    if (userPublicKey) {
      getPublicKey(userPublicKey);
    }
  };

  return (
    <div className={utilStyles.buttonStellarWallet}>
      <Image src="/stellar.png" width={20} height={17} alt="Stellar Logo" />
      {publicKey ? (
        <div>
          <span>{shortenStellarAddress(publicKey)}</span>
        </div>
      ) : hasFreighter && !publicKey ? (
        <button onClick={() => onConnectToFreighter()}>
          <span>Connect with Freighter to Shop</span>
        </button>
      ) : (
        <div>Download Stellar Wallet</div>
      )}
    </div>
  );
};
