import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, user-scalable=no, viewport-fit=cover, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
