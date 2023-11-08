import { atom } from "recoil";

export interface DialogAtom {
  [slug: string]: boolean;
}

export const dialogVisibilityAtom = atom<boolean>({
  key: "dialogVisibilityAtom",
  default: false,
});

export type IDialogs = "example"

export const currentlyUsedDialogAtom = atom<IDialogs>({
  key:"currentlyUsedDialogAtom",
  default:"example"
})


