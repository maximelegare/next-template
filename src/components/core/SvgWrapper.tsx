import React from "react";

import type { FC, ReactElement } from "react";

interface Props {
  svgComponent: ReactElement;
  width: string;
  styles?: string;
}

export const SvgWrapper: FC<Props> = ({ svgComponent, width, styles }) => {
  return <div className={`${width} ${styles ?? ""}`}>{svgComponent}</div>;
};
