import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from '../../components';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

const ChannelDetail: NextPage = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );

      setVideos(videosData.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div>
      <Head>
        <title>Channel - {id}</title>
      </Head>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              height: '300px',
              background:
                'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
              zIndex: 10,
            }}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
          </Box>
        </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
