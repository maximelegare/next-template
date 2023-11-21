import React, { type ReactElement, type FC } from "react";
import { R_ScrollBar } from "~/components/RADIX/R_ScrollBar";

interface Props {
  children: ReactElement;
  bgColor?: string;
}

export const PageLayout: FC<Props> = ({
  children,
  bgColor = "bg-transparent",
}) => {
  return (
    <div className={`flex-grow min-h-6 ${bgColor} pt-16`}>
      <div className="h-full">
        <R_ScrollBar alwaysShowThumb>{children}</R_ScrollBar>
      </div>
    </div>
  );
};
