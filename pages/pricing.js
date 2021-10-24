import Pricing from 'views/Pricing'
import Main from 'layouts/Main'
import Head from 'next/head'

const PricingPage = () => {
  return (
    <div className="container">
      <Head>
        <title>About Us</title>
      </Head>
      <Main>
        <Pricing />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default PricingPage
