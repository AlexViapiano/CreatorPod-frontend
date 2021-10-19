import Brand from 'views/Brand'
import Main from 'layouts/Main'
import { API_URL } from '../../../redux/api'
import Head from 'next/head'

const BrandPage = props => {
  const logo = props?.brand?.logo[0]
  var imageUrl = ''
  if (logo && logo?.url) imageUrl = logo.url
  return (
    <div className="container">
      <Head>
        <title>{props?.brand?.title}</title>
        <meta name="keywords" content=""></meta>
        <meta name="description" content={props?.brand?.description} />
        <meta property="og:image" content={imageUrl} />
      </Head>
      <Main>
        <Brand brand={props.brand} />
      </Main>
    </div>
  )
}

export async function getStaticPaths() {
  const res_en = await fetch(`${API_URL}/brands`)
  const brands_en = await res_en.json()
  const paths = brands_en.map(brand => ({
    params: { id: brand.id.toString() },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps(ctx) {
  try {
    const res = await fetch(`${API_URL}/brands/${ctx.params.id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const brand = await res.json()

    return {
      props: {
        brand: brand,
      },
      revalidate: 60,
    }
  } catch (err) {
    return {
      props: {
        brand: null,
      },
      revalidate: 60,
    }
  }
}

export default BrandPage
