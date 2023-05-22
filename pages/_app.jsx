import React from 'react'
import Head from 'next/head'
import '../styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
