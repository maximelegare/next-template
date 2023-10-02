import { createPortal } from "react-dom";
import React, { type FC, type ReactNode, useRef, useEffect } from "react";
import { PageLayout } from "~/layout/PageLayout";
import { CSSTransition } from "react-transition-group";
import { If, Then, Else, When } from "react-if";

import { useDialogs } from "~/hooks/useDialogs";

interface Props {
  children: ReactNode;
  show: boolean;
  CSSTransitionHandled?: boolean;
  name:string
}

export const BottomDialog: FC<Props> = ({
  children,
  show,
  CSSTransitionHandled,
  name
}) => {

  const { closeDialog } = useDialogs();

  const getDialog = () => {
    return (
      <div className="fixed bottom-0 z-30 mt-1 h-fit w-full overflow-hidden rounded-t-2xl">
        <PageLayout
          noPaddingTopAndBottom
          noMinHeight
          bgColor="bg-[#354281]"
        >
          <div className="flex justify-center">
            <div className="mt-2 h-2 w-10 rounded-2xl bg-primary"></div>
          </div>
          <div className="">{children}</div>
        </PageLayout>
      </div>
    );
  };

  return (
    <>
      <If condition={CSSTransitionHandled}>
        <Then>{getDialog()}</Then>
        <Else>
          <When condition={show}>{getDialog()}</When>
        </Else>
      </If>

      {show && (
        <div
          onClick={() => closeDialog("test-dialog")}
          className="fixed bottom-0 left-0 right-0 top-0 z-[29] bg-neutral opacity-70"
        ></div>
      )}
    </>
  );
};
