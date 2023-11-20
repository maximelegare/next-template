import React, { ReactElement, type FC, type ReactNode } from "react";
import Link from "next/link";

type Variant = "icon-only" | "default" | "icon-round-filled" | "icon-with-text";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "full-width";
type JustifyContent = "start" | "center" | "end";
interface Props {
  handleClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => any;
  disabled?: boolean;
  href?: string;
  variant: Variant;
  type?: "button" | "submit" | "reset";
  buttonSize?: ButtonSize;
  underline?: boolean;
  bgColor?: string;
  bgResetButtonColor?: string;
  topSeparator?: boolean;
  justifyContent?: JustifyContent;
  icon?: ReactElement;
  text?: string;
}

export const Button: FC<Props> = ({
  variant = "default",
  handleClick,
  type = "button",
  disabled,
  href,
  bgColor = "bg-primary",
  buttonSize = "sm",
  topSeparator,
  justifyContent = "center",
  icon,
  text,
}) => {
  const getIconSize = (buttonSize: ButtonSize) => {
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

  const getButtonSize = (buttonSize: ButtonSize) => {
    switch (buttonSize) {
      case "xs": {
        return "btn-xs";
      }
      case "sm": {
        return "btn-sm text-sm";
      }
      case "md": {
        return "btn-md text-lg";
      }
      case "lg": {
        return "btn-lg text-xl";
      }
      case "full-width": {
        return "btn-sm btn-block";
      }
    }
  };

  const getButtonStyles = (variant: Variant) => {
    switch (variant) {
      case "icon-only": {
        return `btn  btn-circle w-fit px-1 py-1 min-h-0 ${getButtonSize(
          buttonSize
        )} outline-none border-none bg-transparent hover:bg-transparent focus:bg-transparent`;
      }
      case "icon-round-filled": {
        return `btn ${bgColor} ${getButtonSize(
          buttonSize
        )} btn-circle btn-primary border-none`;
      }
      case "default": {
        return `btn ${bgColor} ${getButtonSize(
          buttonSize
        )} btn-primary border-none`;
      }
      default: {
        return `btn ${bgColor} ${getButtonSize(
          buttonSize
        )} btn-primary border-none`;
      }
    }
  };

  const getButtonElements = (variant: Variant) => {
    switch (variant) {
      case "icon-round-filled":
      case "icon-only": {
        return (
          <div className="flex items-center justify-center">
            <span className={getIconSize(buttonSize)}>{icon}</span>
          </div>
        );
      }

      case "icon-with-text": {
        return (
          <div className="flex items-center gap-2">
            <span className={getIconSize(buttonSize)}>{icon}</span>
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
      <div className="relative cursor-pointer">
        {topSeparator && <hr />}
        <div className="flex">{getButtonBalise()}</div>
      </div>
    </>
  );
};
