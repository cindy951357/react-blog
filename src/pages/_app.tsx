'use client'
import '../i18n';
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store";
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { appWithTranslation } from "next-i18next";
import AppProvider from "@/context/AppProvider";
import "../app/globals.css";
import "../app/animation.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <AppProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </AppProvider>
  );
};

export default appWithTranslation(MyApp);
