import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface UserWalletSettingState {
  isEthWalletEnabled: boolean;
  isPolygonWalletEnabled: boolean;
  isStellarWalletEnabled: boolean;
  ensAvatarColors: Array<String>;
  userOwnedNFTs: Array<any>;
}

const initialState = {
  isEthWalletEnabled: false,
  isPolygonWalletEnabled: false,
  isStellarWalletEnabled: false,
  ensAvatarColors: [],
  userOwnedNFTs: [],
} as UserWalletSettingState;

const slice = createSlice({
  name: "userWalletSetting",
  initialState,
  reducers: {
    setIsEthWalletEnabled: (
      state,
      { payload: isEthWalletEnabled }: { payload: boolean },
    ) => {
      state.isEthWalletEnabled = isEthWalletEnabled;
    },

    setIsPolygonWalletEnabled: (
      state,
      { payload: isPolygonWalletEnabled }: { payload: boolean },
    ) => {
      state.isPolygonWalletEnabled = isPolygonWalletEnabled;
    },

    setIsStellarWalletEnabled: (
      state,
      { payload: isStellarWalletEnabled }: { payload: boolean },
    ) => {
      state.isStellarWalletEnabled = isStellarWalletEnabled;
    },

    setEnsAvatarColors: (
      state,
      { payload: avatarColors }: { payload: Array<String> },
    ) => {
      state.ensAvatarColors = avatarColors;
    },

    setUserOwnedNFTs: (
      state,
      { payload: ownedNFTs }: { payload: Array<any> },
    ) => {
      const ENS_CONTRACT_DOMAIN = "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85";
      const EDNS_CONTRACT_DOMAIN = "0x53a0018f919bde9c254bda697966c5f448ffddcb";

      let domain = state.isEthWalletEnabled
        ? ENS_CONTRACT_DOMAIN
        : EDNS_CONTRACT_DOMAIN;

      let filteredNFTs = ownedNFTs.filter(
        ({ contract }) => contract.address !== domain,
      );

      state.userOwnedNFTs = filteredNFTs;
    },

    resetEnsAvatarColors: (state) => {
      state.ensAvatarColors = initialState.ensAvatarColors;
    },

    resetWallets: () => initialState,
  },
});

export const { reducer } = slice;
export const {
  setIsEthWalletEnabled,
  setIsPolygonWalletEnabled,
  setIsStellarWalletEnabled,
  setEnsAvatarColors,
  setUserOwnedNFTs,
  resetEnsAvatarColors,
  resetWallets,
} = slice.actions;

export const selectEnsAvatarColors = (state: RootState) =>
  state.userWalletSetting.ensAvatarColors;

export const selectIsEthWalletEnabled = (state: RootState) =>
  state.userWalletSetting.isEthWalletEnabled;

export const selectIsPolygonWalletEnabled = (state: RootState) =>
  state.userWalletSetting.isPolygonWalletEnabled;

export const selectUserOwnedNFTs = (state: RootState) =>
  state.userWalletSetting.userOwnedNFTs;
