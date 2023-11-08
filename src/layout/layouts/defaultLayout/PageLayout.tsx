import React, { type ReactElement, type FC } from "react";

interface Props {
  children: ReactElement;
  bgColor?: string;
}

export const PageLayout: FC<Props> = ({
  children,
  bgColor = "bg-base-100",
}) => {
  return (
    <div className={`min-h-screen w-full ${bgColor} py-16`}>
      <div className="mx-5 my-3" >{children}</div>
    </div>
  );
};
