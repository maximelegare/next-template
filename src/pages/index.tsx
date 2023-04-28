import { type NextPage } from "next";

import { api } from "~/utils/api";

import {serverSideTranslations} from "next-i18next/serverSideTranslations" 
import { HeroSection } from "~/components/pages/index/HeroSection";
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