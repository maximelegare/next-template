import { type AppType } from "next/app";

import { useEffect } from "react";

import { api } from "~/utils/api";

import Layout from "~/layout/Layout";
import Aos from "aos";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  useEffect(() => {
    Aos.init({
      duration:1200,
      once:true,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
