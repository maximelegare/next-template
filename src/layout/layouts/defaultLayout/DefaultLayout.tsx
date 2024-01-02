import React, { useRef, useState } from "react";
import type { ReactElement, FC } from "react";

import { Header } from "../../../components/partials/layout/Header";
import { Footer } from "../../../components/partials/layout/Footer";

import { PageLayout } from "./PageLayout";

import { R_Dialog } from "~/components/RADIX/R_Dialog";
import { R_Drawer } from "~/components/RADIX/R_Drawer";
import { useAlert } from "~/hooks/useAlert";

type Props = {
  children: ReactElement;
};

const DefaultLayout: FC<Props> = ({ children }) => {
  const { Alert } = useAlert();

  return (
    <div className="flex h-screen w-full flex-col">
      <Header></Header>
      <PageLayout>{children}</PageLayout>
      <Footer></Footer>
      <R_Dialog />
      <R_Drawer />
      <Alert />
    </div>
  );
};

export default DefaultLayout;
