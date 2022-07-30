import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col py-4">
      <div>
        <p className="text-center text-xs">
          © 2022 — present &copy; Jeesun Kim (
          <a href="https://twitter.com/codeandfood/">twitter</a>). All Rights
          Reserved.
        </p>
      </div>
      <div>
        <p className="text-center text-xs">made in miami 🌴 </p>
      </div>
    </footer>
  );
};
