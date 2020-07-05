import classNames from 'classnames'
import { RichText } from 'prismic-reactjs'
import Layout from '@/components/Layout'

import styles from './index.module.scss'
import { getHomeContent } from '@/lib/prismic'

type Props = {
  content: any
}

export default function Home({ content }: Props) {
  return (
    <Layout title="embarq.dev | home">
      <main className={styles.mainContent}>
        <section className={classNames(styles.well, styles.homeSection)}>
          <h1>Hi, I am <span className="text-primary">Igor Lee</span></h1>
          <h2>Software Developer<br />with over 5 years of experience</h2>
          <RichText render={content} />
        </section>
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await getHomeContent()

  return {
    props: {
      content: data.content
    }
  }
}
