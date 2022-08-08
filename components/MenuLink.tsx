import React from "react";
import Link from "next/link";

type MenuLinkProps = {
  href: string;
  children?: React.ReactNode;
};

export const MenuLink: React.FC<MenuLinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a className="no-underline text-center font-serif font-normal text-4xl lg:mr-24 lg:text-lg lg:text-left">
      {children}
    </a>
  </Link>
);
