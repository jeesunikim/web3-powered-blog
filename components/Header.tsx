import styles from "styles/layout.module.css";
import utilStyles from "styles/utils.module.css";

import React from "react";
import Link from "next/link";

const tagline = "codeandfood";
const title = "Web3 Powered Blog";

type HeaderProps = {
  isHome: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isHome }) => (
  <header className={styles.header}>
    {/* {!isHome && (
      <div className={utilStyles.heartButton}>
        ❤️<p>3</p>
      </div>
    )} */}
    <div className={styles.menu}>
      <div>
        <p>🌙</p>
        {!isHome ? (
          <Link href="/">
            <a className={styles.tagline}>{tagline}</a>
          </Link>
        ) : (
          <p className={styles.tagline}>{tagline}</p>
        )}
      </div>
      <Link href="/shop">
        <a>Digital Planner Store</a>
      </Link>
    </div>

    <div className={styles.title}>
      <h1 className={utilStyles.heading2Xl}>{title}</h1>
    </div>
  </header>
);
