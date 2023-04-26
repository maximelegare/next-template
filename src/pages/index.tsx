import { type NextPage } from "next";
import Link from "next/link";
import { HeroSection } from "~/components/pages/index/heroSection";
import { api } from "~/utils/api";

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
