import "styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";

import { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { store } from "store";

import { RainbowCustomAvatar } from "components/Wallets/RainbowCustomAvatar";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()],
);
const { connectors } = getDefaultWallets({
  appName: "codeandfood",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={darkTheme()}
        avatar={RainbowCustomAvatar}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
