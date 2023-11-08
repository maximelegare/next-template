import { type AppType } from "next/app";

import App from "next/app";

import { AppContext, AppProps } from "next/app";

import { api } from "~/utils/trpc/api";

// import Layout from "~/layout/layouts/defaultLayout/DefaultLayout";
import { Layout } from "~/layout/Layout";
import { RecoilRoot } from "recoil";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { getServerAuthSession } from "~/server/auth";

import "~/styles/globals.css";
import { useSession } from "next-auth/react";
import { IncomingMessage, ServerResponse } from "http";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session as Session}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
