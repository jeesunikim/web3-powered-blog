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
    <div className="flex mr-9 p-2 rounded-2xl border-black border-2 ">
      <div className="pr-1.5 self-center flex-col">
        <Image
          className="align-self-center"
          src="/stellar-black.png"
          width={20}
          height={17}
          alt="Stellar Logo"
        />
      </div>
      <div className="text-black font-serif text-base font-semibold">
        {publicKey ? (
          <span>{shortenStellarAddress(publicKey)}</span>
        ) : hasFreighter && !publicKey ? (
          <button onClick={() => onConnectToFreighter()}>
            <span>shop with Stellar</span>
          </button>
        ) : (
          <span>Download Stellar Wallet</span>
        )}
      </div>
    </div>
  );
};
