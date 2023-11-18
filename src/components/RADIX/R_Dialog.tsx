import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useDialogs } from "~/hooks/useDialogs";

import {
  type IDialogs,
  currentlyUsedDialogAtom,
  dialogVisibilityAtom,
} from "atoms/dialogAtom";
import { useRecoilValue } from "recoil";
import { DialogLayout } from "~/layout/partials/dialogs/DialogLayout";
import { ExampleDialogContent } from "~/layout/partials/dialogs/exmpleDialog/ExampleDialogContent";
export const R_Dialog = () => {
  const { toggleDialog } = useDialogs();
  const show = useRecoilValue(dialogVisibilityAtom);

  const currentDialog = useRecoilValue(currentlyUsedDialogAtom);

  const getDialogContent = (usedDialog: IDialogs) => {
    switch (usedDialog) {
      case "example": {
        return <ExampleDialogContent />;
      }
    }
  };

  return (
    <Dialog.Root open={show} onOpenChange={() => toggleDialog("example")}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent  fixed bottom-0 z-30 mt-1 h-[95%] w-full overflow-hidden rounded-t-2xl">
          <DialogLayout
            title="Créer un groupe"
            noPaddingTopAndBottom
            noMinHeight
            bgColor="bg-[#354281]"
          >
            {getDialogContent(currentDialog)}
          </DialogLayout>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
