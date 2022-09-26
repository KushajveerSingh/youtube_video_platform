import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@mui/material';

import { Feed, Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home- Youtube Video Platform</title>
      </Head>

      <Feed />
    </div>
  );
};

export default Home;
