import TermsAndConditions from 'views/TermsAndConditions'
import Main from 'layouts/Main'
import Head from 'next/head'

const termsAndConditionsPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <Main>
        <TermsAndConditions />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default termsAndConditionsPage
