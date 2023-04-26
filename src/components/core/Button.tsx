import React from "react";
import type { FC } from "react";
import Link from "next/link";

interface Props {
  variant?: "small" | "small";
  href?: string;
  styles?: string;
  children:string
}

export const Button: FC<Props> = ({ children, variant, styles, href }) => {
  const getClasses = (variant?: string) => {
    switch (variant) {
      case "small": {
        return "";
      }
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
        <button className={`${getClasses(variant)} ${styles ?? ""} w-24`}>
          {children}
        </button>
      )}
    </>
  );
};
