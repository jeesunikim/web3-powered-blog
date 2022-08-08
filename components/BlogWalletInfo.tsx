import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAccount, useEnsName } from "wagmi";
import { useAppDispatch } from "store";

import { blogger_nfts } from "config/blogger_nfts";
import { AlchemyNFTsInfo, SharedNFTsInfo } from "config/types";

import {
  selectIsEthWalletEnabled,
  selectIsPolygonWalletEnabled,
  selectUserOwnedNFTs,
} from "store/slices/userWalletSettingSlice";
import { setSharedTopics } from "store/slices/blogSettingSlice";

type ConnectedWalletInfoProps = {
  userOwnedNfts: AlchemyNFTsInfo[];
  hasSharedNFTs: boolean;
};

type AlchemyContractInfo = {
  contract: { address: string };
};

const ConnectedWalletInfo: React.FC<ConnectedWalletInfoProps> = ({
  userOwnedNfts,
}) => {
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const { data: ensName } = useEnsName({
    address: address,
  });

  const getCommonNFTs = useCallback(() => {
    return userOwnedNfts.filter(({ contract }: AlchemyContractInfo) => {
      return Object.keys(blogger_nfts).includes(contract.address);
    });
  }, [userOwnedNfts]);

  const hasCommonNFTs = Boolean(getCommonNFTs().length);

  useEffect(() => {
    if (hasCommonNFTs) {
      const sharedTopics = getCommonNFTs()
        .map(
          ({ contract }: AlchemyContractInfo) =>
            blogger_nfts[contract.address].topics,
        )
        .reduce(
          (previousValue, currentValue) => [...previousValue, ...currentValue],
          [] as string[],
        )
        .reduce((previousValue: string[], currentValue: string) => {
          if (previousValue.indexOf(currentValue) === -1) {
            previousValue.push(currentValue);
          }
          return previousValue;
        }, [] as string[]);

      dispatch(setSharedTopics(sharedTopics));
    }
  }, [dispatch, hasCommonNFTs, getCommonNFTs]);

  return hasCommonNFTs ? (
    <div>
      {ensName ? (
        <p className="text-3xl font-serif font-semibold pb-6 relative">
          Hello,
          <span className="font-bold absolute pl-3">{ensName}</span>
        </p>
      ) : (
        <>
          <p className="text-3xl font-serif font-semibold relative">Hello,</p>
          <p className="font-bold relative text-lg leading-8">
            {address || ""}
          </p>
        </>
      )}

      <p className="text-2xl font-serif font-normal py-6 relative">
        we both share{" "}
        <span className="font-mono font-bold text-xl">
          {userOwnedNfts.length}
        </span>{" "}
        NFTs
      </p>
      <p className="font-serif font-normal text-xl pb-3">
        My most active ones are:
      </p>
      <ul className="md:pr-6">
        {getCommonNFTs().map(({ title, tokenId, contract }: SharedNFTsInfo) => (
          <li key={`${contract.address}+${tokenId}`}>
            <h2 className="font-mono font-bold text-base text-black pb-2">
              {title.split("#")[0]} (I’m #{tokenId})
            </h2>
            <p className="font-mono font-normal	text-sm leading-relaxed pb-4">
              {Object.values(blogger_nfts[contract.address]?.description)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <p className="font-serif font-semibold pb-6">
        {ensName ? (
          <span className="text-2xl">{ensName}</span>
        ) : (
          <span className="text-xl">{address || ""}</span>
        )}
        <br />
        we don’t share any NFTs together
      </p>
      <p className="font-mono font-bold text-base pb-6">
        Which NFTs are your favorite?
        <br />
        Let me know 😊
      </p>
    </div>
  );
};

export const BlogWalletInfo: React.FC = () => {
  const [isWalletConnected, checkIsWalletConnected] = useState<Boolean>(false);

  const userOwnedNfts = useSelector(selectUserOwnedNFTs);
  const isEthWalletEnabled = useSelector(selectIsEthWalletEnabled);
  const isPolygonWalletEnabled = useSelector(selectIsPolygonWalletEnabled);

  const hasSharedNFTs = Boolean(userOwnedNfts.length);

  useEffect(() => {
    if (isEthWalletEnabled || isPolygonWalletEnabled) {
      checkIsWalletConnected(true);
    }
    if (!isEthWalletEnabled && !isPolygonWalletEnabled) {
      checkIsWalletConnected(false);
    }
  }, [isEthWalletEnabled, isPolygonWalletEnabled]);

  return isWalletConnected ? (
    <ConnectedWalletInfo
      hasSharedNFTs={hasSharedNFTs}
      userOwnedNfts={userOwnedNfts}
    />
  ) : (
    <>
      <p className="font-serif font-semibold text-3xl pb-6">
        Hello,
        <br /> please connect to your wallet for customized experience
        <sup>*</sup>
      </p>

      <div>
        <p className="font-serif text-xs">
          <sup>*</sup> no worries if you don’t have a wallet
        </p>
        <p className="font-serif text-xs">
          <sup>*</sup> I don’t store your information b/c it’s public anyway
        </p>
      </div>
    </>
  );
};
