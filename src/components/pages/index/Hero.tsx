/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Section } from "~/components/core/Section";
import { useTranslation } from "next-i18next";
import Logo from "../../../../public/assets/SVG/logo.svg";

import { Button } from "~/components/core/Button";

import { SvgWrapper } from "~/components/core/SvgWrapper";

import { api } from "~/utils/api";

import { useRecoilState } from "recoil";
import { counterAtomState } from "atoms/counterAtom";

import { useDialogs } from "~/hooks/useDialogs";

export const Hero = () => {
  const { t } = useTranslation("common");

  const [counterState, setCounterState] = useRecoilState(counterAtomState);

  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const { openDialog } = useDialogs();

  return (
    <Section bgColor="gradiant">
      <div className=" flex h-full flex-col items-center pt-[15%]">
        <h3 className="text-xl font-bold text-base-100">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </h3>

        <Button
          handleClick={() => openDialog("test-dialog")}
          variant="standart"
          
        >
          {t("index.hero.add-one")}
        </Button>
      </div>
    </Section>
  );
};
