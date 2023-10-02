import { type NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Hero } from "~/components/pages/index/Hero";

import { useDialogs } from "~/hooks/useDialogs";

import { dialogVisibilityAtom } from "atoms/dialogAtom";

import { useRecoilValue } from "recoil";

import withCSSTransition from "~/hoc/withCSSTransition";

import { useRef } from "react";
import { BottomDialog } from "~/components/core/dialogs/Dialog";




const Home: NextPage = () => {


  return (
    <>
      <main>
        <Hero />
      </main>
      
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "layout"])),
    },
  };
}
