import React, { type FC, type ReactNode } from "react";
import { Button } from "./Button";

interface Props {
  first: ReactNode;
  second: ReactNode;
  condition: boolean;
  changeOpacity?: boolean;
}

export const IconWithTwoStates: FC<Props> = ({
  first,
  second,
  condition,
  changeOpacity,
}) => {
  return (
    <div
      className={`text-3xl  ${
        changeOpacity
          ? `${condition ? "opacity-80" : "opacity-50"}`
          : "opacity-80"
      }`}
    >
      {condition ? first : second}
    </div>
  );
};
