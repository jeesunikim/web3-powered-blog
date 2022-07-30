import utilStyles from "styles/utils.module.css";
import shopStyles from "styles/shop.module.css";

import BigNumber from "bignumber.js";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";

import { config } from "config/config_testnet";
import products from "data/products.json";

import { RootState, useAppDispatch } from "store";
import { sendPayment } from "store/slices/paymentSlice";

import { Layout } from "components/layout";

const About: React.FC = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>
    <h2 className="font-mono font-bold text-3xl text-black pb-2">About Me</h2>
    <section>
      <p>Tell us about you :)</p>
    </section>
  </Layout>
);

export default About;
