import '../i18n';
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { appWithTranslation } from "next-i18next";
import AppProvider from "@/context/AppProvider";
import "../app/globals.css";
import "../app/animation.css";
import { usePosts } from '@/context/PostContext';

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
