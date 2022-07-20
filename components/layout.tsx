import styles from "styles/layout.module.css";

import React, { useEffect, useState } from "react";
import Head from "next/head";

import { useAccount } from "wagmi";

import { useAvatarColors } from "hooks/useAvatarColors";

import { ConnectButtons } from "components/ConnectButtons";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

export const siteTitle = "codeandfood";

type LayoutProps = {
  children: React.ReactNode;
  isHome: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, isHome }) => {
  const { isConnected } = useAccount();
  const avatarColorsArray = useAvatarColors();

  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (isConnected && avatarColorsArray?.length) {
      setBackgroundColor(
        `linear-gradient(45deg, ${avatarColorsArray[0]}, ${avatarColorsArray[1]},${avatarColorsArray[2]})`,
      );
    } else {
      setBackgroundColor("none");
    }
  }, [isConnected, avatarColorsArray]);

  return (
    <div className={styles.body} style={{ backgroundImage: backgroundColor }}>
      <ConnectButtons />
      <div className={styles.container}>
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌙</text></svg>"
          ></link>
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header isHome={isHome} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
