import React from "react";
import Head from "next/head";

import { useSetupReaderWalletsSetting } from "hooks/useSetupReaderWalletsSetting";

import { MobileHeader } from "components/MobileHeader";
import { DesktopHeader } from "components/DesktopHeader";

export const siteTitle = "@TODO your site title";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Setup User's Connected Wallet's Setting
  useSetupReaderWalletsSetting();

  return (
    <div className="min-w-full bg-slate-100 min-h-screen">
      {/* min-w-full px-6 py-3 */}
      <div className="md:mx-auto md:py-6 lg:mx-12">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
          ></link>
          <meta
            name="description"
            content="@TODO write your blog description"
          />
          <meta
            property="og:image"
            content="@TODO add your open graph image for sharing on social media"
          />
          <meta name="og:title" content={siteTitle} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="@TODO twitter card image to share"
          />
          <meta property="twitter:site" content="@TODO your twitter" />
        </Head>
        <header>
          <div className="hidden lg:block">
            <DesktopHeader />
          </div>
          <div className="lg:hidden">
            <MobileHeader />
          </div>
        </header>

        <main className="pt-20 m-5 md:mt-8 md:pt-12 lg:pt-4">{children}</main>
      </div>
    </div>
  );
};
