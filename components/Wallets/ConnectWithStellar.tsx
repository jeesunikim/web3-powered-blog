import React, { useEffect, useState } from "react";
import { isConnected } from "@stellar/freighter-api";
import Image from "next/image";
import Link from "next/link";

import { getFreighterPublicKey } from "helpers/getFreighterPublicKey";
import { shortenStellarAddress } from "helpers/shortenStellarAddress";

export const ConnectWithStellar: React.FC = () => {
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
    <div className="flex justify-center mr-9 mt-3 p-2 rounded-2xl border-black border-2 w-56 md:justify-self-end md:mt-0">
      <div className="pr-1.5 self-center flex-col flex">
        <Image
          className="align-self-center"
          src="/stellar-black.png"
          width={20}
          height={17}
          alt="Stellar Logo"
        />
      </div>
      <div className="text-black text-base font-semibold items-center">
        {publicKey ? (
          <span>{shortenStellarAddress(publicKey)}</span>
        ) : hasFreighter && !publicKey ? (
          <button onClick={() => onConnectToFreighter()}>
            <span>connect with Freighter</span>
          </button>
        ) : (
          <Link href="https://www.freighter.app/">
            <a className="no-underline" target="_blank" rel="noreferrer">
              Download Stellar Wallet
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
