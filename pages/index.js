import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a super-ultra-sugoi engineer</p>
        <p>
          (This is sample web site)
          <a href="https://nextjs.org/learn">Our Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}
