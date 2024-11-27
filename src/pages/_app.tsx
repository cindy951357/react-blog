'use client'
import '../i18n';
import { memo, } from 'react';
import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { appWithTranslation } from "next-i18next";
import AppProvider from "@/context/AppProvider";
import "../app/globals.css";
import "../app/animation.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default appWithTranslation(memo(MyApp));
