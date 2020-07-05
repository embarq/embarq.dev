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
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
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
  </Head>
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.navBrand}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none"><defs/><g filter="url(#filter0_i)"><path fill="#444" d="M11.24.69a.88.88 0 011.52 0L23.7 19.64a.88.88 0 01-.76 1.31H1.06a.88.88 0 01-.76-1.31L11.24.69z"/></g><mask id="mask0" width="24" height="21" x="0" y="0" mask-type="alpha" maskUnits="userSpaceOnUse"><path fill="#444" d="M11.46.31a.63.63 0 011.08 0l11.38 19.7a.63.63 0 01-.55.94H.63a.63.63 0 01-.55-.94L11.46.31z"/></mask><g filter="url(#filter1_di)" mask="url(#mask0)"><path fill="#fff" d="M6.13 21l9-16.43 3.52 6.13-5.6 10.3H6.12z"/></g><defs><filter id="filter0_i" width="23.63" height="24.7" x=".18" y="-3.75" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-4"/><feGaussianBlur stdDeviation="17.5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/><feBlend in2="shape" mode="normal" result="effect1_innerShadow"/></filter><filter id="filter1_di" width="20.52" height="26.43" x="2.13" y="2.57" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-2" dy="-2"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/><feBlend in2="shape" mode="darken" result="effect2_innerShadow"/></filter></defs></svg>
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
