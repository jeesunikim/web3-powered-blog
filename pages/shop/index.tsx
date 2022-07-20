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

const Shop: React.FC = () => {
  const isPaymentSuccessful = useSelector(
    (state: RootState) => state.payment.isSuccessful,
  );
  const dispatch = useAppDispatch();

  return (
    <Layout isHome={false}>
      <Head>
        <title>Digital Planner Shop</title>
      </Head>
      <div className={shopStyles.shopContainer}>
        <h1 className={utilStyles.headingXl}>Digital Planner Store</h1>
      </div>
      {config.stellarPublicKey ? (
        <section>
          {products.map((product) => (
            <div className={shopStyles.shopProductList} key={product.id}>
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
              <div className={shopStyles.shopProductContent}>
                <h2>{product.name}</h2>
                <span>
                  <strong>
                    {product.price.value}
                    {product.price.asset}
                  </strong>
                </span>
                <p>{product.description}</p>
                <div>
                  {isPaymentSuccessful && (
                    <button>Download Your {product.name}</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section>
          <p>Shop owner has not set her public key</p>
        </section>
      )}
    </Layout>
  );
};

export default Shop;
