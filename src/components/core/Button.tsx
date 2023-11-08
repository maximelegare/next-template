import React, { type FC, type ReactNode } from "react";
import Link from "next/link";

interface Props {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => any;
  disabled?: boolean;
  children: string | ReactNode;
  href?: string;
  variant: "icon-only" | "default" | "icon-round-filled" | "reset";
  type?: "button" | "submit" | "reset";
  buttonSize?: "xs" | "sm" | "md" | "lg" | "full-width";
  underline?: boolean;
  bgColor?: string;
  bgResetButtonColor?: string,
  bgFocusColor?: string;
  topSeparator?: boolean;
  contentStart?: boolean;
}

export const Button: FC<Props> = ({
  variant,
  handleClick,
  type,
  children,
  disabled,
  href,
  underline,
  bgColor = "bg-primary",
  buttonSize = "sm",
  topSeparator,
  contentStart,
}) => {
  const getButtonSize = (
    buttonSize: "xs" | "sm" | "md" | "lg" | "full-width"
  ) => {
    switch (buttonSize) {
      case "xs": {
        return "btn-xs";
      }
      case "sm": {
        return "btn-sm";
      }
      case "md": {
        return "btn-md";
      }
      case "lg": {
        return "btn-lg";
      }
      case "full-width": {
        return "btn-sm btn-block";
      }
    }
  };

  const getStyles = (variant: string) => {
    switch (variant) {
      case "icon-only": {
        return `btn min-w-0 ${getButtonSize(
          buttonSize
        )} outline-none border-none bg-transparent hover:bg-transparent focus:bg-transparent`;
      }
      case "icon-round-filled": {
        return `btn ${bgColor} ${getButtonSize(
          buttonSize
        )} btn-circle border-none`;
      }
      case "reset": {
        return `btn bg-[#EF124E] ${getButtonSize(
          buttonSize
        )} text-white focus:text-white border-none`;
      }
      case "default": {
        return `btn ${bgColor} ${getButtonSize(
          buttonSize
        )} text-white focus:text-white border-none`;
      }
      default: {
        return "default";
      }
    }
  };

  const getButtonBalise = () => {
     if (href) {
      return (
        <Link
          href={href ?? ""}
          onClick={handleClick}
          className={` normal-case  flex h-fit flex-col  items-center text-neutral-content focus:text-neutral-content ${contentStart ? "justify-start" : ""
            } ${disabled ? "btn-disabled" : ""} ${getStyles(variant)}`}
          passHref
        >
          {children}
        </Link>
      );
    } else {
      return (
        <button
          type={type}
          onClick={handleClick}
          className={`flex h-fit  ${contentStart ? "justify-start" : ""
            } items-center normal-case text-neutral-content  focus:text-neutral-content ${disabled ? "btn-disabled" : ""
            } ${getStyles(variant)}`}
          disabled={disabled}
        >
          {children}
        </button>
      );
    }
  };

  return (
    <>
      <div className="relative cursor-pointer">
        {topSeparator && <hr className="mt-3" />}
        <div className="flex">{getButtonBalise()}</div>

        <div className={underline ? "visible" : "hidden"}>
          <div className="bg-gradiantAccent absolute -bottom-[7px] h-1 w-full rounded-full"></div>
        </div>
      </div>
    </>
  );
};