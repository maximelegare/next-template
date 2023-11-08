import React, { useRef, type FC, type ReactNode } from "react";
import { DialogLayout } from "~/layout/dialogs/DialogLayout";

import { CSSTransition } from "react-transition-group";

import { useDialogs } from "~/hooks/useDialogs";
import  { type IDialogs, currentlyUsedDialogAtom } from "atoms/dialogAtom";
import { useRecoilValue } from "recoil";
import { ExampleDialogContent } from "./exmpleDialog/ExampleDialogContent";

interface Props {
  show: boolean;
  timeout: number;
  classNamesPrefix: string;
}

export const BottomDialog: FC<Props> = ({
  timeout,
  show,
  classNamesPrefix,
}) => {
  const ref = useRef(null);
  const { closeDialog } = useDialogs();

  const currentDialog = useRecoilValue(currentlyUsedDialogAtom);

  const getDialogContent = (usedDialog: IDialogs) => {
    switch (usedDialog) {
      
      case "example": {
        return <ExampleDialogContent />;
      }
    }
  };

  return (
    <>
      <CSSTransition
        in={show}
        unmountOnExit
        nodeRef={ref}
        timeout={timeout}
        classNames={classNamesPrefix}
      >
        <div
          className="fixed bottom-0 z-30 mt-1 h-[95%] w-full overflow-hidden rounded-t-2xl"
          ref={ref}
        >
          <DialogLayout
            title="Créer un groupe"
            noPaddingTopAndBottom
            noMinHeight
            bgColor="bg-[#354281]"
          >
            {getDialogContent(currentDialog)}
          </DialogLayout>
        </div>
      </CSSTransition>
      {show && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0  bg-neutral opacity-70"
          onClick={() => closeDialog()}
        ></div>
      )}
    </>
  );
};
