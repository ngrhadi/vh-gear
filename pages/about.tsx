import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example" >
    <h1>ABOUT</h1>
    <p>For more information please visit <Link target="_blank" href="https://vaulthunters.gg/gear" rel="noreferrer noopener">VH-Site</Link></p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export default AboutPage
