import React, { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetch('/api/check_user').then((resp) => {
      if (resp.status === 200) {
        console.log('ok');
      }
    });
  }, []);
  return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
  );
}

export default App;
