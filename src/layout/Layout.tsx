import React from "react";
import type { ReactElement, FC } from "react";

import DefaultLayout from "./layouts/defaultLayout/DefaultLayout";

import { usePathname } from "next/navigation";

type Props = {
  children: ReactElement;
};

const Layout: FC<Props> = ({ children }) => {
  const pathname = usePathname();

  const getLayout = (path: string) => {
    switch (path) {
      case "/login": {
        return <div>{children}</div>;
      }
      default: {
        return <DefaultLayout>{children}</DefaultLayout>;
      }
    }
  };

  return <>{getLayout(pathname)}</>;
};

export { Layout };
