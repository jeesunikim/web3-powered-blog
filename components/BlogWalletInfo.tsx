import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnimateHeight from "react-animate-height";
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

const DEFAULT_DIV_HEIGHT = 208;
const EXPANDED_ETH_DIV_HEIGHT = 500;
const EXPANDED_POLYGON_DIV_HEIGHT = 820;
const DIV_EXPANSION_SPEED = 500;

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

  const GENERIC_ADDRESSED_USER_COPY = `Hello, ${ensName || address},`;

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

  return (
    <>
      {hasCommonNFTs ? (
        <div>
          <p className="font-serif font-normal text-2xl pb-6">
            {GENERIC_ADDRESSED_USER_COPY}
            <br />
            we both share{" "}
            <span className="font-mono font-bold text-xl">
              {userOwnedNfts.length}
            </span>{" "}
            NFTs
          </p>
          <p className="font-serif font-normal text-xl pb-3">
            My most active ones are:
          </p>
          <ul>
            {getCommonNFTs().map(
              ({ title, tokenId, contract }: SharedNFTsInfo) => (
                <li key={`${contract.address}+${tokenId}`}>
                  <h2 className="font-mono font-bold text-base text-black pb-2">
                    {title.split("#")[0]} (I’m #{tokenId})
                  </h2>
                  <p className="font-mono font-medium	text-sm leading-relaxed pb-4">
                    {Object.values(blogger_nfts[contract.address]?.description)}
                  </p>
                </li>
              ),
            )}
          </ul>
        </div>
      ) : (
        <div>
          <p className="font-serif font-semibold text-2xl pb-6">
            {GENERIC_ADDRESSED_USER_COPY}
            <br />
            we don’t share any NFTs together
          </p>
          <p className="font-mono font-bold text-base pb-6">
            Which NFTs are your favorite?
            <br />
            Let me know 😊
          </p>
        </div>
      )}
    </>
  );
};

export const BlogWalletInfo: React.FC = () => {
  const [isWalletConnected, checkIsWalletConnected] = useState<Boolean>(false);
  const [height, setHeight] = useState(DEFAULT_DIV_HEIGHT);

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

  useEffect(() => {
    if (isEthWalletEnabled) {
      setHeight(EXPANDED_ETH_DIV_HEIGHT);
    } else if (isPolygonWalletEnabled) {
      setHeight(EXPANDED_POLYGON_DIV_HEIGHT);
    } else if (isWalletConnected && !hasSharedNFTs) {
      setHeight(DEFAULT_DIV_HEIGHT);
    } else {
      setHeight(DEFAULT_DIV_HEIGHT);
    }
  }, [
    isEthWalletEnabled,
    isWalletConnected,
    isPolygonWalletEnabled,
    hasSharedNFTs,
    height,
  ]);

  return (
    <>
      <AnimateHeight
        height={height}
        duration={DIV_EXPANSION_SPEED}
        className="border-l-2 border-black pl-5 py-3 "
      >
        {isWalletConnected ? (
          <ConnectedWalletInfo
            hasSharedNFTs={hasSharedNFTs}
            userOwnedNfts={userOwnedNfts}
          />
        ) : (
          <>
            <p className="font-serif font-semibold text-2xl pb-6">
              Hello,
              <br /> please connect to your wallet for customized experience
              <sup>*</sup>
            </p>

            <div>
              <p className="font-serif text-sm">
                <sup>*</sup>no worries if you don’t have a wallet
              </p>
              <p className="font-serif text-sm">
                <sup>*</sup>we don’t store your information b/c it’s public
                anyway
              </p>
            </div>
          </>
        )}
      </AnimateHeight>
    </>
  );
};
