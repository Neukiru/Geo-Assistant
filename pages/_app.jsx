import React from 'react'
import Head from 'next/head'
import "../styles.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Managed Functions: Your white-labelled integration platform</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
