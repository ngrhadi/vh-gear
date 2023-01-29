import Link from 'next/link'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next';
import axios from 'axios';
import { API } from '../lib/vhAPI';
import { useChesptlate } from '../hooks/useChesplate';
import { Implicit, Prefix, Suffix } from '../interfaces/gear';

const IndexPage = (props) => {
  const chesplate = useChesptlate();
  console.log(chesplate);

  return (
    <Layout title="Vault Hunter - Gear Reasearch">
      <h1>UNDER DEVELOPMENT</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

// export const getStaticProps: GetStaticProps = async () => {
//   const chesplate = useChesptlate();

//   return {
//     props: {
//       chesplate: chesplate,
//     },
//   };
// };
