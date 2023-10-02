import React, {
  type FC,
  type ElementType,
  type ReactElement,
  useRef,
} from "react";

import withCSSTransition from "~/hoc/withCSSTransition";
import { BottomDialog } from "./Dialog";

interface Props {
  show: boolean;
  children: ReactElement;
}

export const DialogWithAnimation: FC<Props> = ({ show, children }) => {
  const DialogWithCSSTransition = withCSSTransition(BottomDialog);

  const ref = useRef(null);

  return (
    <DialogWithCSSTransition
      show={show || false}
      timeout={600}
      classNamesPrefix="bottom-dialog"
      ref={ref}
      otherProps={{ CSSTransitionHandled: true }}
    >
      {children}
    </DialogWithCSSTransition>
  );
};
