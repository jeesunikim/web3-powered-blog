import BigNumber from "bignumber.js";
import { AssetType } from "stellar-base";
import { Network } from "@alch/alchemy-sdk";

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
};

export type AlchemyConfig = {
  apiKey?: string;
  network?: Network.ETH_MAINNET | Network.MATIC_MAINNET;
  maxRetries: number;
};

export interface AlchemyNFTsInfo {
  balance: number;
  contract: { address: string };
  description: string;
  media: Array<any>;
  metadataError: any;
  rawMetadata: any;
  timeLastUpdated: string;
  title: string;
  tokenId: string;
  tokenType: string;
  tokenUri: any;
}

export interface BloggerNFTsInfoMapping {
  title: string;
  description: string;
  topics: string[];
}

export interface BloggerNFTsInfo {
  [contract: string]: BloggerNFTsInfoMapping;
}

export type SharedNFTsInfo = {
  title: string;
  tokenId: string;
  contract: { address: string };
};
