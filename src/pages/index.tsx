import type { NextPage } from "next";
import { Content } from "~/components/pages/Index/IndexContent";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return <Content />;
};


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "layout"])),
    },
  };
}

export default Home;
