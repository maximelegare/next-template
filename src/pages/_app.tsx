import { type AppType } from "next/app";

import { useEffect } from "react";

import { api } from "~/utils/api";

import Layout from "~/layout/Layout";
import Aos from "aos";
import { appWithTranslation } from "next-i18next";
import { RecoilRoot } from "recoil";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default api.withTRPC(appWithTranslation(MyApp));
