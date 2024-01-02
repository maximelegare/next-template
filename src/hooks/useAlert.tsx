/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { alertAtom } from "atoms/alertAtom";
import React from "react";
import { useRecoilState } from "recoil";
import { useMemo } from "react";
import { R_Alert } from "~/components/RADIX/R_Alert";

import type { Color } from "~/components/core/Button";

export const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertAtom);

  const closeAlert = () => {
    setAlert({
      message: "",
      title: "",
      callback: undefined,
      show: false,
      btns: {
        cancel: { text: "Cancel", color: "base-200" },
        action: { text: "Continue", color: "error" },
      },
    });
  };

  const openAlert = (
    callback: () => unknown | void,
    opts: {
      title: string;
      message: string;
      btns: {
        cancel?: { text: string; color: Color };
        action: { text: string; color: Color };
      };
    }
  ) => {
    setAlert({
      title: opts.title,
      message: opts.message,
      callback,
      show: true,
      btns: {
        cancel: {
          text: opts.btns.cancel?.text ?? "Cancel",
          color: opts.btns.cancel?.color ?? "base-200",
        },
        action: { text: opts.btns.action.text, color: opts.btns.action.color },
      },
    });
  };

  const handleAction = async () => {
    try {
      alert.callback && (await alert.callback());
      closeAlert();
    } catch (err) {
      setAlert((old) => ({ ...old, title: "An error occured" }));
    }
  };

  const Alert = () => {
    const Alert = useMemo(() => {
      return (
        <R_Alert
          show={alert.show}
          title={alert.title}
          message={alert.message}
          handleAction={handleAction}
          btns={alert.btns}
        />
      );
    }, []);
    return Alert;
  };

  return { closeAlert, openAlert, Alert };
};
