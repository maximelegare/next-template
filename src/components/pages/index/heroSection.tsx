import React from "react";
import { Section } from "~/components/core/Section";
import { useTranslation } from "next-i18next";

export const HeroSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section styles="bg-primary">
      <div className=" flex h-full items-center justify-center">
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
