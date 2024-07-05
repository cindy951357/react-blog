import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default appWithTranslation(MyApp);