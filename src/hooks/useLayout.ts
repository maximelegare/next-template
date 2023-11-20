import { useRecoilState } from "recoil";
import {
  currentlyUsedDialogAtom,
  dialogVisibilityAtom,
  drawerVisibilityAtom,
} from "atoms/layoutAtom";

import { type IDialogs } from "atoms/layoutAtom";

export const useLayout = () => {
  const [showDialog, setShowDialog] = useRecoilState(dialogVisibilityAtom);
  const [currentDialog, setCurrentDialog] = useRecoilState(
    currentlyUsedDialogAtom
  );

  const [showDrawer, setShowDrawer] = useRecoilState(drawerVisibilityAtom);

  const toggleDialog = (slug?: IDialogs) => {
    if (slug) {
      setShowDialog(!showDialog);
      setCurrentDialog(slug);
    } else {
      setShowDialog(false);
    }
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return {
    toggleDialog,
    toggleDrawer,
    currentDialog,
    showDialog,
    showDrawer
  };
};
