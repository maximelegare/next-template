import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useLayout } from "~/hooks/useLayout";

import { type IDialogs } from "atoms/layoutAtom";
import { DialogLayout } from "~/components/partials/dialogs/DialogLayout";
import { ExampleDialogContent } from "~/components/partials/dialogs/exmpleDialog/ExampleDialogContent";
export const R_Dialog = () => {
  const { toggleDialog, showDialog, currentDialog } = useLayout();

  const getDialogContent = (usedDialog: IDialogs) => {
    switch (usedDialog) {
      case "example": {
        return <ExampleDialogContent />;
      }
    }
  };

  return (
    <Dialog.Root open={showDialog} onOpenChange={() => toggleDialog("example")}>
      <Dialog.Portal>
        <Dialog.Overlay className="Overlay" />
        <Dialog.Content className="DialogContent fixed bottom-0 z-30 mt-1 h-[95%] w-full overflow-hidden rounded-t-2xl">
          <DialogLayout
            noPaddingTopAndBottom
            noMinHeight
            bgColor="bg-secondary"
          >
            {getDialogContent(currentDialog)}
          </DialogLayout>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
