import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import '../app/globals.css';
import '../app/animation.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Component {...pageProps} />
      </Layout>      
    </I18nextProvider>
  );
}

export default appWithTranslation(MyApp);