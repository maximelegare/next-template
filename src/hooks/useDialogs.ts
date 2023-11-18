import { useRecoilState } from "recoil";
import {
  currentlyUsedDialogAtom,
  dialogVisibilityAtom,
} from "atoms/dialogAtom";

import { type IDialogs } from "atoms/dialogAtom";

export const useDialogs = () => {
  const [show, setShow] = useRecoilState(dialogVisibilityAtom);
  const [currentDialog, setCurrentDialog] = useRecoilState(
    currentlyUsedDialogAtom
  );

  const toggleDialog = (slug?: IDialogs) => {
    if (slug) {
      setShow(!show);
      setCurrentDialog(slug);
    } else {
      setShow(false);
    }
  };

  const closeDialog = () => {
    setShow(false);
  };

  return {
    closeDialog,
    toggleDialog,
    currentDialog,
    show,
  };
};
