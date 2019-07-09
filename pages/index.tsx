import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Typescript Test! Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>TEST Typescript!!</h1>
    <Link href="/test">
      <a>COUNTER</a>
    </Link>
  </>
);

export default Home;
