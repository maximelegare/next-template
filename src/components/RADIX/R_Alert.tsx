import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "~/components/core/Button";
import { useAlert } from "~/hooks/useAlert";
import type { Color } from "~/components/core/Button";


interface Props {
  show:boolean,
  title: string;
  message: string;
  btns:{
    cancel:{
      text:string;
      color:Color
    },
    action:{
      text:string;
      color:Color
    }
  }
  handleAction: () => unknown;
}

export const R_Alert = ({ show, message, title, handleAction, btns }: Props) => {
  const {closeAlert } = useAlert();

  return (
    <AlertDialog.Root open={show}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="Overlay fixed inset-0 z-[60] bg-[#0a040465]" />
        <AlertDialog.Content className="AlertDialogAnimation fixed left-[50%] top-[40%] z-[70] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-secondary  focus:outline-none">
          <AlertDialog.Title className="bg-base-200/50 px-6 py-2 text-lg font-bold text-base-content">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="text-md mx-6 mb-5 mt-4">
            {message}
          </AlertDialog.Description>
          <div className="mx-6 my-5 flex justify-end gap-4">
            <AlertDialog.Cancel asChild>
              <Button
                variant="default"
                color={btns.cancel.color}
                text={btns.cancel.text}
                handleClick={closeAlert}
              />
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant="default"
                color={btns.action.color}
                text={btns.action.text}
                handleClick={handleAction}
              />
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
