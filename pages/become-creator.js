import BecomeCreator from 'views/BecomeCreator'
import Main from 'layouts/Main'
import Head from 'next/head'

const BecomeCreatorPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Become A Creator</title>
        <meta name="keywords" content=""></meta>
        <meta
          name="description"
          content="Our family is always growing! Forward thinking businesses use our platform as a service to gain marketshare, increase brand recognition, and receive valuable feedback from shoppers when selling their lifestyle products. Our vendors have access to a back-end portal in order to manage their products, orders, invoices and more."
        />
        <meta property="og:image" content="https://waytoogood.com/social.png" />
      </Head>
      <Main>
        <BecomeCreator />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default BecomeCreatorPage
