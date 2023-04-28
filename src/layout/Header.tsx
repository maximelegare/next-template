import React from "react";
import type { FC } from "react";

import { Button } from "~/components/core/Button";
import { Dropdown } from "~/components/core/Dropdown";

import { useRouter } from "next/router";

import { FaGlobeAmericas } from "react-icons/fa";

import { useTranslation } from "next-i18next";

export const Header: FC = ( ) => {

  const { t } = useTranslation("layout")

  const headerLinks = [
    { title: t("header.portfolio"), route: "#" },
    { title: t("header.about"), route: "#" },
  ];

  const { locales } = useRouter();

  const mapLocales = locales?.map((locale) => {
    return { title: locale };
  });

  return (
    <>
      <header className={`fixed flex h-16  w-full justify-center`}>
        <div className="container flex items-center justify-between">
          <div className="text-base">logo</div>
          <ul className="flex gap-2">
            {headerLinks.map((el, idx) => (
              <li key={idx} className="">
                <Button styles="btn-base" href={el.route}>
                  {el.title}
                </Button>
              </li>
            ))}

            <Dropdown
              trigger={{
                triggerTitle: <FaGlobeAmericas />,
                triggerStyles: "btn-circle w-8",
              }}
              content={{ items: mapLocales ?? [] }}
            />
          </ul>
        </div>
      </header>
    </>
  );
};
