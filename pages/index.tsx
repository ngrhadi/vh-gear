import Link from 'next/link'
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { queryGear } from '../utils/query-gear';
import Header from '../components/Header';
import { ScrollArea } from '@mantine/core';

const IndexPage = () => {
  const { query } = queryGear('axe', 'axes');
  const [axe, setAxe] = useState({});
  useEffect(() => {
    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setAxe(data);
      });
    return () => {};
  }, []);

  console.log(axe, 'axeee');

  return (
    <Layout title="VH - Gear Reasearch">
      <Header />
      <ScrollArea style={{ width: '100%' }}>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
        {/* <Image
        src={'/assets/vh-logo-lg.png'}
        width={400}
        height={200}
        alt="logo-vh"
        className="logo-main"
      /> */}
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
      </ScrollArea>
    </Layout>
  );
};

export default IndexPage;


