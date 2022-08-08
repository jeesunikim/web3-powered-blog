import React from "react";
import Link from "next/link";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const H2: React.FC<TextProps> = ({ children, className = "" }) => (
  <h2 className={`${className} text-2xl font-serif font-semibold mb-3 md:mx-5`}>
    {children}
  </h2>
);

export const H3: React.FC<TextProps> = ({ children, className = "" }) => (
  <h3 className={`text-xl font-sans font-semibold md:mx-5 ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<TextProps> = ({ children, className = "" }) => (
  <h4 className={`${className} text-lg font-sans font-semibold mt-6 md:mx-5`}>
    {children}
  </h4>
);

export const Paragraph: React.FC<TextProps> = ({
  children,
  className = "",
}) => <p className={`${className} md:mx-5`}>{children}</p>;

export const Ul: React.FC<TextProps> = ({ children, className = "" }) => (
  <ul className={`${className} mx-5 list-disc md:mx-10`}>{children}</ul>
);
