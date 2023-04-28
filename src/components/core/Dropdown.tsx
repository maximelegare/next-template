/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import type { FC, ReactNode } from "react";
import { Button } from "./Button";
import { When } from "react-if";

import { useRouter } from "next/router";

type Props = {
  trigger: {
    triggerStyles?: string;
    triggerTitle: ReactNode;
  };
  content: {
    items: { route?: string; title: string }[];
  };
};

export const Dropdown: FC<Props> = ({ content, trigger }) => {
  const { triggerStyles, triggerTitle } = trigger;

  const { push } = useRouter();

  const handleClick = async (l: string) => {
    const elem = document.activeElement as HTMLElement;

    try {
      /**
       * Close the Dropdown by removing the blur from element
       */
      if (elem) {
        elem?.blur();

        await push("/", undefined, { locale: l });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0}>
        <Button styles={triggerStyles}>{triggerTitle}</Button>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box  mt-2 bg-base-100 p-2 shadow"
      >
        <When condition={content.items?.length}>
          <div className="flex flex-col gap-1">
            {content.items?.map(({ title }, idx) => (
              <div key={idx}>
                <Button
                  handleClick={() => handleClick(title)}
                  styles="btn-accent"
                >
                  {title}
                </Button>
              </div>
            ))}
          </div>
        </When>
      </ul>
    </div>
  );
};
