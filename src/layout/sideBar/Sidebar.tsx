import React, { useRef} from "react";
import { CSSTransition } from "react-transition-group";
import { useSession } from "next-auth/react";
import { Button } from "../../components/core/Button";
import { signOut } from "next-auth/react";
import {
  IconSignout,
  IconUsers,
  IconProfile,
  IconGroup,
  IconCalculator,
  IconClose,
} from "../../components/core/Icons";
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
            <div className="flex flex-col h-full justify-between py-4">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="w-5"></div>
                  <Button
                    variant="default"
                    bgColor="bg-primary"
                    buttonSize="xs"
                    handleClick={() => closeSidebar()}
                  >
                    <IconClose className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-col  items-center gap-3 rounded-lg bg-[#667ce968] p-3">
                  <div className="flex">
                    {sessionData?.user && (
                      <Image
                        src={sessionData.user.image as string}
                        alt="user_image"
                        className="rounded-full"
                        width={50}
                        height={50}
                      />
                    )}
                  </div>

                  <div className="text-md">
                    <div className="font-extrabold text-base-100">
                      Bonjour {sessionData?.user.name}
                    </div>
                  </div>
                </div>

                <hr className="my-3" />

                <div
                  id="container_sidebarItems"
                  className="flex flex-col space-y-3"
                >
                  <div
                    id="container_sidebarItems_friends"
                    onClick={closeSidebar}
                  >
                    <Button
                      variant="icon-only"
                      buttonSize="full-width"
                      href="/friends"
                    >
                      <div
                        className={`flex w-full items-center justify-start ${
                          pathname.startsWith("/friends")
                            ? "text-base-100 brightness-150"
                            : "text-primary-content opacity-60"
                        }`}
                      >
                        <IconUsers className="text-md h-6 w-6 fill-base-100" />
                        <label className="ml-3 text-base font-light lowercase text-base-200">
                          Amis
                        </label>
                      </div>
                    </Button>
                  </div>

                  <div
                    id="container_sidebarItems_groups"
                    onClick={closeSidebar}
                  >
                    <Button
                      variant="icon-only"
                      buttonSize="full-width"
                      href="/groups"
                    >
                      <div
                        className={`flex w-full items-center justify-start ${
                          pathname.startsWith("/groups")
                            ? "text-base-100 brightness-150"
                            : "text-primary-content opacity-60"
                        }`}
                      >
                        <IconGroup className="text-md h-6 w-6 fill-base-100" />
                        <label className="ml-3 text-base font-light lowercase text-base-200">
                          Groupes
                        </label>
                      </div>
                    </Button>
                  </div>

                  <div
                    id="container_sidebarItems_profile"
                    onClick={closeSidebar}
                  >
                    <Button
                      variant="icon-only"
                      buttonSize="full-width"
                      href="/profile"
                    >
                      <div
                        className={`flex w-full items-center justify-start ${
                          pathname.startsWith("/profile")
                            ? "text-base-100 brightness-150"
                            : "text-primary-content opacity-60"
                        }`}
                      >
                        <IconProfile className="text-md h-6 w-6 fill-base-100" />
                        <label className="ml-3 text-base font-light lowercase text-base-200">
                          Profil
                        </label>
                      </div>
                    </Button>
                  </div>
                </div>

                <hr className="my-3" />

                <div id="container_fastcalculator" onClick={closeSidebar}>
                  <Button
                    variant="icon-only"
                    buttonSize="full-width"
                    href="/fastcalculator"
                  >
                    <div
                      className={`flex w-full items-center justify-start ${
                        pathname.startsWith("/fastcalculator")
                          ? "text-base-100 brightness-150"
                          : "text-primary-content opacity-60"
                      }`}
                    >
                      <IconCalculator className="text-md h-5 w-5 fill-base-100" />
                      <label className="ml-3 text-base font-light lowercase text-base-200">
                        Calculateur Rapide
                      </label>
                    </div>
                  </Button>
                </div>

                <hr className="my-3" />
              </div>
              <div
                id="container_signout"
                className="flex items-center justify-center pt-5"
              >
                <Button
                  variant="default"
                  bgColor="bg-[#EF124E]"
                  handleClick={() => signOut()}
                >
                  <IconSignout className="text-md fill-base-100" />
                  <span className="mx-1 text-xs">Déconnexion</span>
                </Button>
              </div>
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
