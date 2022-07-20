import StellarSdk from "stellar-sdk";

import { SiteConfig } from "config/types";

export const config: SiteConfig = {
  stellarHorizonUrl: "https://horizon-testnet.stellar.org",
  stellarNetworkPassphrase: StellarSdk.Networks.TESTNET,
  stellarNetwork: "TESTNET",
  stellarPublicKey: process.env.NEXT_PUBLIC_STELLAR_PUB_KEY || "",
  stellarTokens: {
    USDC: {
      code: "USDC",
      type: "credit_alphanum4",
      issuer: {
        key: "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5",
      },
    },
  },
};
