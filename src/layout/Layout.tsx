import React, { useRef } from "react";
import type { ReactElement, FC } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRecoilValue } from "recoil";

import { dialogVisibilityAtom } from "atoms/dialogAtom";

import withCSSTransition from "~/hoc/withCSSTransition";

import { BottomDialog } from "~/components/core/dialogs/Dialog";

type Props = {
  children: ReactElement;
};

const DialogWithAnimation = withCSSTransition(BottomDialog);
const Layout: FC<Props> = ({ children }) => {
  
  const dialogsVisibilitiy = useRecoilValue(dialogVisibilityAtom);
  const dialogRef = useRef(null);

  return (
    <>
      <Header></Header>
      <main>{children}</main>
      {/* <Footer></Footer> */}
      <DialogWithAnimation
        show={dialogsVisibilitiy["test-dialog"] || false}
        timeout={600}
        classNamesPrefix="bottom-dialog"
        ref={dialogRef.current}
        otherProps={{ CSSTransitionHandled: true }}
      >
        <div>test</div>
      </DialogWithAnimation>
    </>
  );
};

export default Layout;
