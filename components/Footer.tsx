import styles from "styles/layout.module.css";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          © 2022 — present &copy; Jeesun Kim (
          <a href="https://twitter.com/codeandfood/">twitter</a>). All Rights
          Reserved.
        </p>
      </div>
      <div>
        <p>made in miami 🌴 </p>
      </div>
    </footer>
  );
};
