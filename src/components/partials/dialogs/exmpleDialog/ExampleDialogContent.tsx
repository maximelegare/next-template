import React from "react";

import { Button } from "~/components/core/Button";

import { useLayout } from "~/hooks/useLayout";

import { DialogHeader } from "../DialogHeader";

export const ExampleDialogContent = () => {
  const { toggleDialog } = useLayout();

  return (
    <div>
      <DialogHeader title="Example" />

      <Button
        variant="default"
        handleClick={() => toggleDialog()}
        text="Close Dialog"
      />
    </div>
  );
};
