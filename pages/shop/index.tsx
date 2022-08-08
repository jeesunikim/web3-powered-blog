import shopStyles from "styles/shop.module.css";

import Link from "next/link";
import BigNumber from "bignumber.js";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";

import { config } from "config/config_testnet";
import products from "data/products.json";

import { RootState, useAppDispatch } from "store";
import { sendPayment } from "store/slices/paymentSlice";

import { ConnectWithStellar } from "components/Wallets/ConnectWithStellar";
import { H3, Paragraph } from "components/Styleguide/Text";

const Shop: React.FC = () => {
  const isPaymentSuccessful = useSelector(
    (state: RootState) => state.payment.isSuccessful,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Head>
        <title>Digital Shop Store</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="text-3xl font-serif font-bold md:text-4xl">
          Digital Store
        </h2>
        <ConnectWithStellar />
      </div>

      {config.stellarPublicKey ? (
        <section className="m-5 grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2 md:gap-x-4 lg:px-8 lg:py-4">
          {products.map((product) => (
            <div key={product.id}>
              <Image
                onClick={() => {
                  dispatch(
                    sendPayment({
                      amount: new BigNumber(product.price.value),
                      shopOwnerPubKey: config.stellarPublicKey,
                    }),
                  );
                }}
                src={product.image}
                width={400}
                height={323}
                alt={product.name}
              />
              <div>
                <H3>{product.name}</H3>
                <span className="md:mx-5">
                  <strong>
                    {product.price.value}
                    {product.price.asset}
                  </strong>
                </span>
                <Paragraph className="mt-3">{product.description}</Paragraph>
                <div className="mt-5 mx-5">
                  {isPaymentSuccessful && (
                    <button className={shopStyles.shopButton}>
                      Download Your {product.name}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section>
          <H3 className="mt-8 text-center md:mx-0">
            TO USE IT, SHOP OWNER NEEDS TO ADD HIS/HER STELLAR PUBLIC KEY AS
            ENVIRONMENT VARIABLE
          </H3>
          <Paragraph className="text-center mb-8 mt-2">
            MORE INFORMATION{" "}
            <Link href="https://nextjs.org/docs/basic-features/environment-variables">
              <a target="_blank" rel="noreferrer">
                HERE
              </a>
            </Link>{" "}
            ON HOW TO DO IT IN NEXT.JS
          </Paragraph>

          <Paragraph className="text-center">
            I was thinking of freelancers in cash economy who offer their
            products and service to customers all over the world for{" "}
            <strong>this shop feature</strong>.
          </Paragraph>

          <Paragraph className="text-center">
            By using Stellar, they can get paid instantly and can cash out right
            away from their local moneygram location.
          </Paragraph>
          <Paragraph className="text-center semi-bold mt-5">
            More information on Stellar/Moneygram integration{" "}
            <Link href="https://stellar.org/moneygram">
              <a target="_blank" rel="noreferrer">
                here
              </a>
            </Link>
          </Paragraph>
        </section>
      )}
    </>
  );
};

export default Shop;
