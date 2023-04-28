import React from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";




interface Props {
  variant?: "small" | "small";
  href?: string;
  styles?: string;
  children:ReactNode
  handleClick?: () => any
}

export const Button: FC<Props> = ({ children, variant, styles, href, handleClick }) => {
  const getClasses = (variant?: string) => {
    switch (variant) {
      default: {
        return "btn btn-outline btn-sm";
      }
    }
  };
  return (
    <>
      {href ? (
        <Link className={`${getClasses(variant)} ${styles ?? ""} btn-base100 w-24`} href={href}>
          {children}
        </Link>
      ) : (
        <button onClick={handleClick} className={`${getClasses(variant)} ${styles ?? ""} w-24`}>
          {children}
        </button>
      )}
    </>
  );
};
