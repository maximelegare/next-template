/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Section } from "~/components/core/Section";
import { useTranslation } from "next-i18next";
import Logo from "../../../../public/assets/SVG/logo.svg";

import { SvgWrapper } from "~/components/core/SvgWrapper";

export const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <Section styles="gradiant">
      <div className=" flex h-full flex-col items-center pt-[15%]">
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-back"
          data-aos-delay="600"
          className="mb-8"
        >
          <SvgWrapper width="w-36" svgComponent={<Logo />} />
        </div>
        <div data-aos="fade-up-custom" data-aos-easing="ease-in-out-back">
          <h1 className="text-center text-4xl">
            {t("index.hero.this-is-my")}{" "}
            <span className="font-display text-6xl text-accent">
              {t("index.hero.template")}
            </span>
            <br /> {t("index.hero.for")}{" "}
            <span className="font-display text-6xl text-accent">
              {t("index.hero.future")}
            </span>{" "}
            {t("index.hero.projects")}{" "}
            <span className="font-display text-6xl text-accent">.</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};

// {t("this-is-my")}{" "}
// <span className="font-display text-6xl text-accent">{t("template")}</span>
// <br /> {t("for")}{" "}
// <span className="font-display text-6xl text-accent">
//   {t("future")}
// </span>{" "}
// {t("projects")}{" "}
// <span className="font-display text-6xl text-accent">.</span>
