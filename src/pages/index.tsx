import { type NextPage } from "next";
import { HeroSection } from "~/components/pages/index/heroSection";
import { api } from "~/utils/api";

import {serverSideTranslations} from "next-i18next/serverSideTranslations" 

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

 

  return (
    <>
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default Home;


export async function getStaticProps({locale}:{locale:string}){

  return {
    props:{
      ... (await serverSideTranslations(locale, ['common', "layout"]))
    }
  }
}