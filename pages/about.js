import About from 'views/About'
import Main from 'layouts/Main'
import Head from 'next/head'

const AboutPage = () => {
  return (
    <div className="container">
      <Head>
        <title>About Us</title>
      </Head>
      <Main>
        <About />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default AboutPage
