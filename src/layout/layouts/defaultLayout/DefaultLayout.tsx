import React, { useRef, useState } from "react";
import type { ReactElement, FC } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRecoilValue } from "recoil";

import {
  type IDialogs,
  currentlyUsedDialogAtom,
  dialogVisibilityAtom,
} from "atoms/dialogAtom";

import { BottomDialog } from "~/layout/partials/dialogs/Dialog";

import { PageLayout } from "./PageLayout";
import { Sidebar } from "~/layout/partials/sideBar/Sidebar";

import { ExampleDialogContent } from "~/layout/partials/dialogs/exmpleDialog/ExampleDialogContent";

type Props = {
  children: ReactElement;
};

const DefaultLayout: FC<Props> = ({ children }) => {
  const dialogVisibilitiy = useRecoilValue(dialogVisibilityAtom);

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Header openSidebar={() => setShowSidebar(true)}></Header>
      <main>
        <PageLayout>{children}</PageLayout>
      </main>
      <Footer></Footer>
      <Sidebar show={showSidebar} closeSidebar={() => setShowSidebar(false)} />

      <BottomDialog
        show={dialogVisibilitiy}
        timeout={600}
        classNamesPrefix="bottom-dialog"
      />
    </>
  );
};

export default DefaultLayout;
