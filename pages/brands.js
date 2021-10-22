import React from 'react'
import Brands from 'views/Brands'
import Main from 'layouts/Main'
import { API_URL } from '../redux/api'
import Head from 'next/head'

const BrandsPage = props => {
  return (
    <div className="container">
      <Head>
        <title>Brands</title>
        <meta
          name="description"
          content="The easiest way to find creators ready to work with your brand!"
        ></meta>
        <meta name="keywords" content=""></meta>
      </Head>

      <Main>
        {/* <Brands brands={props.brands} /> */}
        <Brands brands={[]} />
      </Main>
    </div>
  )
}

// export async function getStaticProps({ locale }) {
//   try {
//     const res = await fetch(`${API_URL}/brands?_locale=` + locale, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     })
//     const response = await res.json()
//     return {
//       props: {
//         brands: response,
//       },
//       revalidate: 60,
//     }
//   } catch (err) {
//     return {
//       props: {
//         brands: [],
//       },
//       revalidate: 60,
//     }
//   }
// }

export default BrandsPage
