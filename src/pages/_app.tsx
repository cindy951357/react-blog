import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { CommentProvider } from '../components/CommentContext';
import { appWithTranslation } from 'next-i18next';
import '../app/globals.css';
import '../app/animation.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommentProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>  
    </CommentProvider>          
  );
}

export default appWithTranslation(MyApp);