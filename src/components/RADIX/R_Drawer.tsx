import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { useLayout } from "~/hooks/useLayout";
import { DrawerContent } from "../partials/layout/DrawerContent";

export const R_Drawer = () => {
  const { showDrawer, toggleDrawer } = useLayout();

  return (
    <Dialog.Root open={showDrawer} onOpenChange={() => toggleDrawer()}>
      <Dialog.Portal>
        <Dialog.Overlay className="Overlay" />
        <Dialog.Content className="DrawerContent fixed  z-30 right-0 top-0  h-screen w-[80%] max-w-[300px] overflow-auto bg-primary-focus">
          <DrawerContent />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
