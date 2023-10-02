import React, { type FC, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string;
  noPaddingTopAndBottom?: boolean;
  noMinHeight?: boolean;
}

export const PageLayout: FC<Props> = ({
  children,
  bgColor = "bg-neutral",
  noPaddingTopAndBottom = false,
  noMinHeight,
}) => {
  return (
    <div
      className={`h-full ${noMinHeight ? "" : "min-h-screen"}  ${bgColor} ${
        !noPaddingTopAndBottom ? "pb-[135px]" : ""
      } ${!noPaddingTopAndBottom ? "pt-[120px]" : ""} `}
    >
      <div className="mx-4">{children}</div>
    </div>
  );
};
