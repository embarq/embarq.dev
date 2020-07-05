import classNames from 'classnames'
import Layout from '@/components/Layout'

import styles from './index.module.scss'

export default function Home() {
  return (
    <Layout title="embarq.dev | home">
      <main className={styles.mainContent}>
        <section className={classNames(styles.well, styles.homeSection)}>
          <h1>Hi, I am <span className="text-primary">Igor Lee</span></h1>
          <h2>Software Developer<br />with over 5 years of experience</h2>
          <p>I am an experienced and enthusiastic software developer. I specialize in frontend, backend, and project development. Highly experienced in ReactJs, Typescript, Angular, Ionic and NodeJs. </p>
          <p>Interested in functional and reactive programming, love high-tech things, and always open to the self-development opportunities.</p>
          <p>My main strength is my sharp mind and flexibility. This allows me deliver the best solutions using the newest technologies.</p>
        </section>
      </main>
    </Layout>
  )
}

export const getStaticProps = () => {
  return {
    props: {}
  }
}
