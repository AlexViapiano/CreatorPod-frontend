import FAQ from 'views/FAQ'
import Main from 'layouts/Main'
import Head from 'next/head'

const faqPage = () => {
  return (
    <div className="container">
      <Head>
        <title>FAQ</title>
        <meta name="keywords" content=""></meta>
        <meta name="description" content="Your question might have already been answered" />
      </Head>
      <Main>
        <FAQ />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default faqPage
