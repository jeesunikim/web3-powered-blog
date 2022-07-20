import BigNumber from "bignumber.js";
import { AssetType } from "stellar-base";

export interface StellarAssetIssuer {
  key: string;
  name?: string;
  url?: string;
  hostName?: string;
}

export interface StellarAssetToken {
  type: AssetType;
  code: string;
  issuer: StellarAssetIssuer;
  anchorAsset?: string;
  numAccounts?: BigNumber;
  amount?: BigNumber;
  bidCount?: BigNumber;
  askCount?: BigNumber;
  spread?: BigNumber;
}

export type SiteConfig = {
  // Stellar Related
  stellarHorizonUrl: string;
  stellarNetworkPassphrase: string;
  stellarNetwork: "PUBLIC" | "TESTNET" | null;
  stellarPublicKey: string;
  stellarTokens: {
    [tokenCode: string]: StellarAssetToken;
  };
  // ETH Related
  // Polygon Related
  // Tezos Related
};
