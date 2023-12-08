import React, { ReactElement, type FC, type ReactNode } from "react";
import Link from "next/link";

type Variant = "icon-only" | "default" | "icon-round-filled" | "icon-with-text";
type size = "xs" | "sm" | "md" | "lg" ;
type JustifyContent = "start" | "center" | "end";
type Width = "fit" | "full";
type Color =
  | "primary"
  | "primary-content"
  | "primary-focus"
  | "secondary"
  | "secondary-content"
  | "secondary-focus"
  | "accent"
  | "neutral"
  | "neutral-content"
  | "base-100"
  | "base-200"
  | "success"
  | "error";

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
  bgResetButtonColor?: string;
  topSeparator?: boolean;
  justifyContent?: JustifyContent;
  icon?: ReactElement;
  text?: string;
  color?: Color;
  width?: Width;
}

export const Button: FC<Props> = ({
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
}) => {
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
      case "primary-content":
        return "btn-primary-content";
      case "primary-focus":
        return "btn-primary-focus";
      case "secondary":
        return "btn-secondary";
      case "secondary-content":
        return "btn-secondary-content";
      case "secondary-focus":
        return "btn-secondary-focus";
      case "accent":
        return "btn-accent";
      case "base-100":
        return "btn-base-100";
      case "base-200":
        return "btn-base-200";
      case "error":
        return "btn-error";
      case "success":
        return "btn-success";
      case "neutral":
        return "btn-neutral";
      case "neutral-content":
        return "btn-neutral-content";
    }
  };

  const getButtonStyles = (variant: Variant) => {
    switch (variant) {
      case "icon-only": {
        return `btn  btn-circle w-fit px-1 py-1 min-h-0 ${getButtonSize(
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
      default: {
        return `btn ${getButtonColor(color)} ${getButtonSize(
          size
        )} border-none`;
      }
    }
  };

  const getButtonElements = (variant: Variant) => {
    switch (variant) {
      case "icon-round-filled":
      case "icon-only": {
        return (
          <div className="flex items-center justify-center">
            <span className={getIconSize(size)}>{icon}</span>
          </div>
        );
      }

      case "icon-with-text": {
        return (
          <div className="flex items-center gap-2">
            <span className={getIconSize(size)}>{icon}</span>
            <p>{text}</p>
          </div>
        );
      }
      case "default": {
        return <div>{text}</div>;
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
          flex-col
          items-center
          ${getJustifyContentStyles(justifyContent)}
          ${getButtonWidth(width)}
          ${disabled ? "btn-disabled" : ""}
          ${getButtonStyles(variant)}`}
          passHref
        >
          {getButtonElements(variant)}
        </Link>
      );
    } else {
      return (
        <button
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
          {getButtonElements(variant)}
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
};
