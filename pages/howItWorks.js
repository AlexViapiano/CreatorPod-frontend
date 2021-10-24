import HowItWorks from 'views/HowItWorks'
import Main from 'layouts/Main'
import Head from 'next/head'

const HowItWorksPage = () => {
  return (
    <div className="container">
      <Head>
        <title>About Us</title>
      </Head>
      <Main>
        <HowItWorks />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default HowItWorksPage
