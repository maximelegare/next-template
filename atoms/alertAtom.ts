import { atom } from "recoil";
import { type Color } from "~/components/core/Button";

interface AlertAtom {
  callback?: () => unknown | void;
  show: boolean;
  title: string;
  message: string;
  btns: {
    cancel: { text: string; color: Color };
    action: { text: string; color: Color };
  };
}

export const alertAtom = atom<AlertAtom>({
  key: "alertAtom",
  default: {
    callback: undefined,
    show: false,
    title: "Are you sure?",
    message: "All data will be lost",
    btns: {
      cancel: { text: "Cancel", color: "base-200" },
      action: { text: "Continue", color: "error" },
    },
  },
});
