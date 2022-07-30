import React from "react";
import Head from "next/head";
// import { useSelector } from "react-redux";

import { useSetupReaderWalletsSetting } from "hooks/useSetupReaderWalletsSetting";

import { Header } from "components/Header";
import { Footer } from "components/Footer";

// import { selectEnsAvatarColors } from "store/slices/userWalletSettingSlice";

export const siteTitle = "codeandfood";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Setup User's Connected Wallet's Setting
  useSetupReaderWalletsSetting();

  // const ensAvatarColors = useSelector(selectEnsAvatarColors);
  // const hasEnsAvatarColors = Boolean(ensAvatarColors?.length);

  return (
    <div
      className="bg-slate-50 min-h-screen"
      // style={{
      //   backgroundImage: hasEnsAvatarColors
      //     ? `linear-gradient(45deg, ${ensAvatarColors[0]}, ${ensAvatarColors[1]},${ensAvatarColors[2]})`
      //     : "none",
      // }}
    >
      <div className="py-6 md:container md:mx-auto min-w-full:px-12">
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
        <Header />
        <main className="mt-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
