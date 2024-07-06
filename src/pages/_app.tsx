import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { appWithTranslation } from "next-i18next";
import AppProvider from "@/context/AppProvider";
import "../app/globals.css";
import "../app/animation.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default appWithTranslation(MyApp);
