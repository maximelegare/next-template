import React, { type FC, type ReactNode } from "react";
import { When } from "react-if";
import Link from "next/link";

interface Props {
  handleClick: () => any;
  disabled?: boolean;
  children: string | ReactNode;
  href?: string;
  variant:
    | "play-small"
    | "icon-only"
    | "text"
    | "standart"
    | "icon-round-outline"
    | "icon-round-filled-accent";
  type?: "button" | "submit";
  buttonSize?: 1 | 2 | 3 | "full-width";
  underline?: boolean;
  bgColor?: string;
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
  bgColor = "bg-gradiantAccent",
  buttonSize = 1,
  topSeparator,
  contentStart,
}) => {
  const getButtonSize = (buttonSize: 1 | 2 | 3 | "full-width") => {
    switch (buttonSize) {
      case 1: {
        return "p-0";
      }
      case 2: {
        return "p-2";
      }
      case 3: {
        return "p-4";
      }
      case "full-width": {
        return "btn-block";
      }
    }
  };

  const getStyles = (variant: string) => {
    switch (variant) {
      case "icon-only": {
        return `btn  min-w-0 ${getButtonSize(
          buttonSize
        )} outline-none border-none  bg-transparent hover:bg-transparent focus:bg-transparent`;
      }
      case "icon-round-filled-accent": {
        return `btn ${getButtonSize(
          buttonSize
        )} rounded-full border-none ${bgColor} focus:${bgColor}`;
      }
      case "icon-round-outline": {
        return `btn border-base-200 focus:border-base-200 focus:bg-transparent btn-outline ${getButtonSize(
          buttonSize
        )} rounded-full`;
      }
      case "text": {
        return "";
      }
      case "standart": {
        return `btn btn-primary text-base-200 focus:text-base-200`;
      }
      default: {
        return "hello";
      }
    }
  };

  const getButtonBalise = () => {
    if (href) {
      return (
        <Link
          href={href ?? ""}
          onClick={handleClick}
          className={`flex h-fit min-h-[2.2rem] min-w-[2.2rem] items-center text-neutral-content focus:text-neutral-content ${
            contentStart ? "justify-start" : ""
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
          className={`flex h-fit min-h-[2.2rem] min-w-[2.2rem] ${
            contentStart ? "justify-start" : ""
          } items-center capitalize text-neutral-content focus:text-neutral-content ${
            disabled ? "btn-disabled" : ""
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
