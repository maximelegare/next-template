import React, { type ElementType, type Ref, type ReactElement } from "react";

import { CSSTransition } from "react-transition-group";

import { forwardRef } from "react";

const withCSSTransition = (WrappedConponent: ElementType) =>
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      {
        show,
        timeout,
        classNamesPrefix,
        children,
        otherProps,
      }: {
        show: boolean;
        timeout: number;
        classNamesPrefix: string;
        children?: ReactElement;
        otherProps?: object;
      },
      ref
    ) => {
      return (
        <>
          <CSSTransition
            in={show}
            unmountOnExit
            nodeRef={ref as Ref<HTMLElement>}
            timeout={timeout}
            classNames={classNamesPrefix}
          >
            
            <WrappedConponent ref={ref} show={show} {...otherProps}>
              {children}
            </WrappedConponent>
          </CSSTransition>
        </>
      );
    }
  );

export default withCSSTransition;
