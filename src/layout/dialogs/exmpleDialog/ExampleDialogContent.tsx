import React from "react";

import { Button } from "../../../components/core/Button";

import { useDialogs } from "~/hooks/useDialogs";

import { DialogHeader } from "../DialogHeader";

export const ExampleDialogContent = () => {
  const { closeDialog } = useDialogs();

  return (
    <div>
      <DialogHeader title="Example" />

      <Button variant="default" handleClick={() => closeDialog()}>
        Close Dialog
      </Button>
    </div>
  );
};
