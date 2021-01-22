import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://embarq.dev/" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#1abc9c" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#333333" />
          <meta name="description" content="Full-stack software developer. I build solid solutions with Javascript, TypeScript, React, Angular, NodeJs, RxJS. Blogging about amazing tech-stuff" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://embarq.dev/" />
          <meta property="og:title" content="embarq.dev" />
          <meta property="og:description" content="Full-stack software developer. I build solid solutions with Javascript, TypeScript, React, Angular, NodeJs, RxJS. Blogging about amazing tech-stuff" />
          <meta property="og:image" content="/embarq_dev_social_preview.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://embarq.dev/" />
          <meta property="twitter:title" content="embarq.dev" />
          <meta property="twitter:description" content="Full-stack software developer. I build solid solutions with Javascript, TypeScript, React, Angular, NodeJs, RxJS. Blogging about amazing tech-stuff" />
          <meta property="twitter:image" content="/embarq_dev_social_preview.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
