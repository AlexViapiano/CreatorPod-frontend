import ShippingAndReturns from 'views/ShippingAndReturns'
import Main from 'layouts/Main'
import Head from 'next/head'

const shippingAndReturnsPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Shipping & Returns</title>
        <meta name="description" content="Let's discuss our shipping & returns policies" />
      </Head>
      <Main>
        <ShippingAndReturns />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default shippingAndReturnsPage
