import Link from 'next/link'
import Layout from '../components/Layout';
import Image from 'next/image';

const IndexPage = (props) => {
  return (
    <Layout title="VH - Gear Reasearch">
      <h1>UNDER DEVELOPMENT</h1>
      <Image
        src={'/assets/vh-logo-lg.png'}
        width={400}
        height={200}
        alt="logo-vh"
        className="logo-main"
      />
      <h1>GEAR RESEARCH</h1>
      <p>
        For more information please visit{' '}
        <Link
          target="_blank"
          href="https://vaulthunters.gg/gear"
          rel="noreferrer noopener"
        >
          VH-Site
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;


