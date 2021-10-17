import FAQ from 'views/FAQ'
import Main from 'layouts/Main'
import Head from 'next/head'

const faqPage = () => {
  return (
    <div className="container">
      <Head>
        <title>FAQ</title>
        <meta
          name="keywords"
          content="Way Too Good, way too good, waytoogood, health food, vegan, gluten free, keto, organic"
        ></meta>
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
