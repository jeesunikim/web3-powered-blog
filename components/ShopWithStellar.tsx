import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ShopWithStellar: React.FC = () => {
  return (
    <Link href="/shop">
      <a className="flex no-underline items-center mr-9 p-2 rounded-2xl border-black border-2">
        <div className="pr-1.5 self-center flex-col">
          <Image
            className="align-self-center"
            src="/stellar-black.png"
            width={20}
            height={17}
            alt="Stellar Logo"
          />
        </div>
        <div className="text-black font-serif text-base font-semibold">
          <span>shop with Stellar</span>
        </div>
      </a>
    </Link>
  );
};
