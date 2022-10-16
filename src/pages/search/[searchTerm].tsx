import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Box, Stack, Typography } from '@mui/material';

import { Videos } from '../../components';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

const SearchFeed: NextPage = () => {
  const router = useRouter();
  const { searchTerm } = router.query;

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${searchTerm}}`).then(({ items }) =>
      setVideos(items)
    );
  }, [searchTerm]);

  return (
    <div>
      <Head>
        <title>Search - {searchTerm}</title>
      </Head>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span>{' '}
          videos
        </Typography>

        <Videos videos={videos} direction="row" />
      </Box>
    </div>
  );
};

export default SearchFeed;
