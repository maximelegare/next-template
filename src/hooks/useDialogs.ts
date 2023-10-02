import React, { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { dialogVisibilityAtom } from "atoms/dialogAtom";


interface SlugObject {
  [slug: string]: boolean;
}

export const useDialogs = () => {
  const [usedSlug, setUsedSlug] = useState("");
  const [dialogsVisibility, setDialogVisibility] = useRecoilState(dialogVisibilityAtom);

  const checkIfDialogOpen = (dialogs: SlugObject) => {
    const values = Object.values(dialogs);

    const truthyValues: boolean[] = [];

    values.forEach((val) => {
      if (val === true) {
        truthyValues.push(val);
      }
    });
    if (truthyValues.length === 0) {
      // bodyOverflowVisible();
      // console.log("overflow-hidden");
    }
  };

  const openDialog = (slug: string) => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [slug]: true };
      checkIfDialogOpen(obj);
      console.log(obj);
      return obj;
    });
    setUsedSlug(slug);
  };

  const closeDialog = (slug: string) => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [slug]: false };
      checkIfDialogOpen(obj);
      console.log(obj);
      return obj;
    });
    setUsedSlug(slug);
  };

  const setDialogSlug = (slug: string) => {
    setDialogVisibility((oldValues) => {
      const obj = { ...oldValues, [slug]: false };
      return obj;
    });
    setUsedSlug(slug);
  };

  return {
    
    closeDialog,
    openDialog,
    setDialogSlug,
    show:dialogsVisibility[usedSlug]
  };
};
