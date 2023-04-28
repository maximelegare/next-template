import React from "react";
import type { ReactElement, FC } from "react";

import { useMemo } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";



type Props = {
  children: ReactElement;
};

const Layout: FC<Props> = ({ children, }) => {
  const memoizedValue = useMemo(() => <>{children}</>, [children]);

  return (
    <>
      <Header></Header>
      <main>{memoizedValue}</main>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Layout;
