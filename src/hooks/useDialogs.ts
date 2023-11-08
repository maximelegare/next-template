
import { useRecoilState } from "recoil";
import {
  currentlyUsedDialogAtom,
  dialogVisibilityAtom,
} from "atoms/dialogAtom";

import { type IDialogs } from "atoms/dialogAtom";


export const useDialogs = () => {
  
  const [show, setShow] = useRecoilState(
    dialogVisibilityAtom
  );
  const [currentDialog, setCurrentDialog] = useRecoilState(
    currentlyUsedDialogAtom
  );

  

  const openDialog = (slug: IDialogs) => {
    setShow(true)
    setCurrentDialog(slug);
  };

  const closeDialog = () => {
    setShow(false)
  };

  return {
    closeDialog,
    openDialog,
    currentDialog,
    show
    
  };
};
