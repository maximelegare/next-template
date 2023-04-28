import { type NextPage } from "next";

import { api } from "~/utils/api";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Hero } from "~/components/pages/index/Hero";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
