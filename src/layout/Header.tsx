import React from "react";
import type { FC } from "react";

import { Button } from "~/components/core/Button";

type Props = {
  links: {
    title: string;
    route: string;
  }[];
};

export const Header: FC<Props> = ({ links }) => {
  return (
    <>
      <header className={`fixed flex h-16  w-full justify-center`}>
        <div className="container flex items-center justify-between">
          <div className="text-base">logo</div>
          <ul className="flex gap-2">
            {links.map((el, idx) => (
              <li key={idx}>
                <Button styles="btn-base" href={el.route}>
                  {el.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};
