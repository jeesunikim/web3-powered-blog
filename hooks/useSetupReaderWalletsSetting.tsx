import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getNftsForOwner, Network } from "@alch/alchemy-sdk";
import { useAccount, useNetwork } from "wagmi";

import { getAlchemySettings, initAlchemy } from "config/alchemy";

import { useAppDispatch } from "store";
import {
  setIsEthWalletEnabled,
  setIsPolygonWalletEnabled,
  setEnsAvatarColors,
  setUserOwnedNFTs,
  resetEnsAvatarColors,
  resetWallets,
  selectEnsAvatarColors,
  selectIsEthWalletEnabled,
  selectIsPolygonWalletEnabled,
} from "store/slices/userWalletSettingSlice";

import { resetSharedTopics } from "store/slices/blogSettingSlice";
import { useAvatarColors } from "hooks/useAvatarColors";

export const useSetupReaderWalletsSetting = () => {
  const dispatch = useAppDispatch();

  const { isConnected, isDisconnected, address } = useAccount();

  const { chain } = useNetwork();
  const connectedChain = chain?.rpcUrls?.alchemy;

  const alchemyConfig =
    connectedChain && getAlchemySettings({ connectedChain });
  const alchemy =
    alchemyConfig &&
    initAlchemy({
      alchemyConfig,
    });

  /* ENS RELATED */
  const ensAvatarColors = useSelector(selectEnsAvatarColors);
  const hasEnsAvatarColors = Boolean(ensAvatarColors?.length);
  const avatarColorsArray = useAvatarColors();

  const isEthWalletEnabled = useSelector(selectIsEthWalletEnabled);
  const isPolygonWalletEnabled = useSelector(selectIsPolygonWalletEnabled);

  useEffect(() => {
    if (isConnected && alchemyConfig && alchemyConfig?.network) {
      if (alchemyConfig?.network === Network.MATIC_MAINNET) {
        dispatch(setIsPolygonWalletEnabled(true));
        dispatch(setIsEthWalletEnabled(false));
      }
      if (alchemyConfig?.network === Network.ETH_MAINNET) {
        dispatch(setIsEthWalletEnabled(true));
        dispatch(setIsPolygonWalletEnabled(false));
      }
    }
  }, [isConnected, dispatch, alchemyConfig]);

  useEffect(() => {
    if (isDisconnected) {
      dispatch(resetWallets());
      dispatch(resetSharedTopics());
    }
  }, [isDisconnected, dispatch]);

  useEffect(() => {
    if (
      isConnected &&
      isEthWalletEnabled &&
      avatarColorsArray?.length &&
      !hasEnsAvatarColors
    ) {
      dispatch(setEnsAvatarColors(avatarColorsArray));
    }
  }, [
    isConnected,
    isEthWalletEnabled,
    avatarColorsArray,
    hasEnsAvatarColors,
    dispatch,
  ]);

  useEffect(() => {
    if (isConnected && isPolygonWalletEnabled && hasEnsAvatarColors) {
      dispatch(resetEnsAvatarColors());
    }
  }, [isConnected, isPolygonWalletEnabled, hasEnsAvatarColors, dispatch]);

  useEffect(() => {
    if (
      isConnected &&
      (isPolygonWalletEnabled || isEthWalletEnabled) &&
      alchemy &&
      address
    ) {
      getNftsForOwner(alchemy, address).then(({ ownedNfts }) => {
        dispatch(setUserOwnedNFTs(ownedNfts));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, address, isPolygonWalletEnabled, isEthWalletEnabled]);
};
