import React, { ForwardedRef, forwardRef, ReactElement, type ReactNode } from "react";
import Link from "next/link";

type Variant =
  | "icon-only"
  | "default"
  | "icon-round-filled"
  | "icon-with-text"
  | "icon-footer"
  | "icon-square-filled";
type size = "xs" | "sm" | "md" | "lg";
type JustifyContent = "start" | "center" | "end";
type Width = "fit" | "full";
export type Color =
  | "primary"
  | "accent"
  | "neutral"
  | "base-100"
  | "base-200"
  | "success"
  | "error"
  | "ghost";

interface Props {
  handleClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => any;
  disabled?: boolean;
  href?: string;
  variant: Variant;
  type?: "button" | "submit" | "reset";
  size?: size;
  underline?: boolean;
  topSeparator?: boolean;
  justifyContent?: JustifyContent;
  icon?: ReactElement;
  text?: string;
  color?: Color;
  width?: Width;
  opacityFull?: boolean;
  customOneTimeButton?: ReactElement;
  textColor?: "premium";
}

export const Button = forwardRef(function Button({
  variant = "default",
  handleClick,
  type = "button",
  disabled,
  href,
  size = "sm",
  topSeparator,
  justifyContent = "center",
  icon,
  text,
  width = "fit",
  color = "primary",
  opacityFull = true,
  customOneTimeButton,
  textColor,
}: Props, ref:ForwardedRef<HTMLButtonElement>) {
  const getIconSize = (buttonSize: size) => {
    switch (buttonSize) {
      case "xs": {
        return "text-sm";
      }
      case "sm": {
        return "text-lg";
      }
      case "md": {
        return "text-2xl";
      }
      case "lg": {
        return "text-[1.7rem]";
      }
      default: {
        return "text-sm";
      }
    }
  };

  const getButtonWidth = (width: Width) => {
    switch (width) {
      case "fit":
        return "";
      case "full":
        return "btn-block";
    }
  };

  const getButtonSize = (buttonSize: size) => {
    switch (buttonSize) {
      case "xs": {
        return `btn-xs `;
      }
      case "sm": {
        return `btn-sm text-sm `;
      }
      case "md": {
        return "btn-md text-lg ";
      }
      case "lg": {
        return " btn-lg text-xl";
      }
    }
  };

  const getButtonColor = (color: Color) => {
    switch (color) {
      case "primary":
        return "btn-primary";
      case "accent":
        return "btn-accent";
      case "base-100":
        return "btn-base-100";
      case "base-200":
        return "btn-base-200";
      case "error":
        return "btn-error text-white/80";
      case "success":
        return "btn-success";
      case "neutral":
        return "btn-neutral";
      case "ghost":
        return "btn-ghost text-neutral-content";
    }
  };

  const getButtonStyles = (variant: Variant) => {
    switch (variant) {
      case "icon-footer":
      case "icon-only": {
        return `btn btn-circle min-w-[50px] w-fit px-1 py-1 min-h-0 ${getButtonSize(
          size
        )} outline-none border-none bg-transparent hover:bg-transparent focus:bg-transparent`;
      }
      case "icon-round-filled": {
        return `btn ${getButtonColor(color)} ${getButtonSize(
          size
        )} btn-circle  border-none`;
      }
      case "default": {
        return `btn ${getButtonColor(color)} ${getButtonSize(
          size
        )} border-none`;
      }
      case "icon-square-filled":
      default: {
        return `btn ${getButtonColor(color)} ${getButtonSize(
          size
        )} border-none`;
      }
    }
  };

  const getOpacity = () => (opacityFull ? "opacity-100" : "opacity-50");

  const getTextColor = () =>
    textColor ? "text-premium opacity-80" : "text-neutral-content";

  const getButtonElements = (variant: Variant) => {
    switch (variant) {
      case "icon-round-filled":
      case "icon-only": {
        return (
          <div
            className={`${getOpacity()}  ${getTextColor()} flex items-center justify-center`}
          >
            <span className={`${getIconSize(size)}`}>{icon}</span>
          </div>
        );
      }

      case "icon-square-filled": {
        return <div className={getTextColor()}>{icon}</div>;
      }
      case "icon-footer": {
        return (
          <div
            className={`${getOpacity()} ${getTextColor()} flex min-w-[50px] flex-col items-center justify-center`}
          >
            <span className={`${getIconSize(size)}`}>{icon}</span>
            <p className={` text-xs uppercase`}>{text}</p>
          </div>
        );
      }

      case "icon-with-text": {
        return (
          <div
            className={`${getOpacity()} ${getTextColor()} flex items-center gap-2`}
          >
            <span className={` ${getIconSize(size)}`}>{icon}</span>
            <p>{text}</p>
          </div>
        );
      }
      case "default": {
        return <div className={getTextColor()}>{text}</div>;
      }
    }
  };

  const getJustifyContentStyles = (justify: JustifyContent) => {
    switch (justify) {
      case "center": {
        return "justify-center";
      }
      case "start": {
        return "justify-start pl-0";
      }
      case "end": {
        return "justify-end pr-0";
      }
    }
  };

  const getButtonBalise = () => {
    if (href) {
      return (
        <Link
          href={href ?? ""}
          onClick={handleClick}
          className={`
          flex
          h-fit
          items-center
          normal-case
          outline-none
          outline-offset-0
          ${getJustifyContentStyles(justifyContent)}
          ${getButtonWidth(width)}
          ${disabled ? "btn-disabled" : ""}
          ${getButtonStyles(variant)}`}
          passHref
        >
          {customOneTimeButton
            ? customOneTimeButton
            : getButtonElements(variant)}
        </Link>
      );
    } else {
      return (
        <button
          ref={ref}
          type={type}
          onClick={handleClick}
          className={`
          flex
          h-fit
          ${getJustifyContentStyles(justifyContent)}
          ${getButtonWidth(width)}
          items-center
          normal-case
          outline-none
          outline-offset-0
          ${disabled ? "btn-disabled" : ""}
          ${getButtonStyles(variant)}`}
          disabled={disabled}
        >
          {customOneTimeButton
            ? customOneTimeButton
            : getButtonElements(variant)}
        </button>
      );
    }
  };

  return (
    <>
      <div
        className={`${width === "full" ? "" : "w-fit"} relative cursor-pointer`}
      >
        {topSeparator && <hr />}
        {getButtonBalise()}
      </div>
    </>
  );
});
