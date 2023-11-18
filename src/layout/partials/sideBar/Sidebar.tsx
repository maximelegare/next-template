import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useSession } from "next-auth/react";
import { Button } from "../../../components/core/Button";
import { signOut } from "next-auth/react";
import {
  IconSignout,
  IconUsers,
  IconProfile,
  IconGroup,
  IconCalculator,
  IconClose,
} from "../../../components/core/Icons";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  show: boolean;
  closeSidebar: () => void;
}

export const Sidebar = ({ show, closeSidebar }: Props) => {
  const { data: sessionData } = useSession();
  const ref = useRef(null);
  const { pathname } = useRouter();

  return (
    <>
      <CSSTransition
        in={show}
        unmountOnExit
        nodeRef={ref.current}
        timeout={500}
        classNames="sidebar"
      >
        <div
          id="sidebar"
          className="fixed  right-0 top-0 z-10 h-screen w-[80%] max-w-[300px] overflow-auto bg-primary-focus"
        >
          <div className="mx-4 h-full">
            <div className="flex h-full flex-col justify-between py-4">
              <div className="flex flex-col gap-1">
                <Button
                  justifyContent="start"
                  variant="icon-with-text"
                  buttonSize="xs"
                  text="Close"
                  handleClick={() => closeSidebar()}
                  icon={<IconClose />}
                  bgColor="btn-error"
                />
                <Button
                  topSeparator
                  variant="icon-with-text"
                  buttonSize="full-width"
                  text="Close"
                  justifyContent="start"
                  handleClick={() => closeSidebar()}
                  icon={<IconClose />}
                  bgColor="bg-transparent"
                />
                <Button
                  variant="icon-with-text"
                  buttonSize="full-width"
                  text="Close"
                  justifyContent="start"
                  handleClick={() => closeSidebar()}
                  icon={<IconClose />}
                  bgColor="bg-transparent"
                />
              </div>
              <div className="text-center text-base-100">footer message</div>
            </div>
          </div>
        </div>
      </CSSTransition>
      {show && (
        <div
          onClick={() => closeSidebar()}
          className="fixed bottom-0 left-0 right-0 top-0  bg-neutral opacity-70"
        ></div>
      )}
    </>
  );
};
