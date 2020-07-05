import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from './Layout.module.scss'

type Props = {
  children: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'embarq.dev' }) => (<>
  <Head>
    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#222222" />
    <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
    <meta name="theme-color" content="#222222" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>{title}</title>
  </Head>
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.navBrand}>
        <img src="/embarq_dev_logo.svg" alt="logo" width="24" height="20" />
        <strong className={styles.navBrandTitle}>
          <span>embarq</span><span className="text-dark">.dev</span>
        </strong>
      </a>
    </Link>
    <nav className={styles.navContent}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link href="#"><a className={styles.navLink}>about</a></Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="#"><a className={styles.navLink}>blog</a></Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="#"><a className={styles.navLink}>contact</a></Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="#"><a className={styles.navLink}>work</a></Link>
        </li>
      </ul>
    </nav>
  </header>
  {children}
  <footer className={styles.mainFooter}>
    <p>© 2020 Igor Lee. All Rights Reserved</p>
    <ul className={styles.socialLinksList}>
      <li className={styles.socialLinksItem}>
        <a href="https://github.com/embarq" title="github" target="_blank">
          <img src="/social-icons/github.svg" alt="github" width="24" height="24" />
        </a>
      </li>
      <li className={styles.socialLinksItem}>
        <a href="https://t.me/embarq" title="telegram" target="_blank">
          <img src="/social-icons/telegram.svg" alt="telegram" width="24" height="24" />
        </a>
      </li>
      <li className={styles.socialLinksItem}>
        <a href="mailto:embarq.dev@gmail.com" title="mail">
          <img src="/social-icons/gmail.svg" alt="gmail" width="24" height="24" />
        </a>
      </li>
      <li className={styles.socialLinksItem}>
        <a href="https://www.linkedin.com/in/igor-lee-943537127/" title="linkedin" target="_blank">
          <img src="/social-icons/linkedin.svg" alt="linkedin" width="24" height="24" />
        </a>
      </li>
      <li className={styles.socialLinksItem}>
        <a href="https://profile.codersrank.io/user/embarq" title="codersrank" target="_blank">
          <img src="/social-icons/codersrank.svg" alt="codersrank" width="24" height="24" />
        </a>
      </li>
    </ul>
  </footer>
</>)

export default Layout
