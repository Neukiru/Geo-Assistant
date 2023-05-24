import React from 'react'
import Head from 'next/head'
import '../styles.css'
import MutateGeneralStyle from '../components/MutateGeneralStyle'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <MutateGeneralStyle />
      <Head>
        <title></title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
