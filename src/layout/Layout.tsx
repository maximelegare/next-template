import React from "react";
import type { ReactElement, FC } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";



type Props = {
  children: ReactElement;
};

const Layout: FC<Props> = ({ children, }) => {

  return (
    <>
      <Header></Header>
      <main>{children}</main>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Layout;
