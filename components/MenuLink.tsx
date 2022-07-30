import React from "react";
import Link from "next/link";

type MenuLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const MenuLink: React.FC<MenuLinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a className="mr-24 no-underline font-serif font-normal text-lg">
      {children}
    </a>
  </Link>
);
