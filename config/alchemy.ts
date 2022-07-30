import { initializeAlchemy, Network } from "@alch/alchemy-sdk";

import { AlchemyConfig } from "config/types";

export function initAlchemy({
  alchemyConfig,
}: {
  alchemyConfig: AlchemyConfig;
}) {
  return initializeAlchemy(alchemyConfig);
}

export function getAlchemySettings({
  connectedChain,
}: {
  connectedChain: string;
}): AlchemyConfig | undefined {
  if (!connectedChain) return undefined;

  const connectedChainUrl = new URL(connectedChain);
  const alchemyNetwork = connectedChainUrl?.hostname?.split(".")[0] as
    | Network.ETH_MAINNET
    | Network.MATIC_MAINNET;

  return {
    apiKey: process.env.ALCHEMY_ID,
    network: alchemyNetwork,
    maxRetries: 10,
  };
}
