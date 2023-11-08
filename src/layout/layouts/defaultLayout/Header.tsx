import React from "react";
import type { FC } from "react";

import Logo from "../../../../public/assets/SVG/partago_white.svg";
import { Button } from "~/components/core/Button";
import { IconBurger } from "~/components/core/Icons";

interface Props {
  openSidebar: () => void;
}

export const Header: FC<Props> = ({ openSidebar }) => {
  return (
    <>
      <header className={`fixed flex h-16  w-full justify-center`}>
        <div className="w- flex h-16 w-full items-center justify-center bg-primary  text-white">
          <div className="flex mx-3 justify-between w-full">
            <div className="w-32 flex items-center">
              <Logo />
            </div>
            <Button
              handleClick={openSidebar}
              variant="icon-only"
            >
              <IconBurger className="text-white text-3xl"/>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
