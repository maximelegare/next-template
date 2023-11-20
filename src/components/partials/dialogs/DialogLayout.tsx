import React, { type FC, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string;
  noPaddingTopAndBottom?: boolean;
  noMinHeight?: boolean;
}

export const DialogLayout: FC<Props> = ({
  children,
  bgColor = "bg-neutral",
  noPaddingTopAndBottom = false,
  noMinHeight,
}) => {
  return (
    <div
      className={`relative h-full ${
        noMinHeight ? "" : "min-h-screen"
      }  ${bgColor} ${!noPaddingTopAndBottom ? "pb-[135px]" : ""} ${
        !noPaddingTopAndBottom ? "pt-[120px]" : ""
      } `}
    >
      <div className="mb-6 flex justify-center">
        <div className="mt-2 h-2 w-10 rounded-2xl bg-primary"></div>
      </div>
      
      <div className="mx-3">{children}</div>
      
    </div>
  );
};
