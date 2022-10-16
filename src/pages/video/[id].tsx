import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';

import { Videos } from '../../components';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

interface TypeVideoDetail {
  snippet: null | { title: string; channelId: string; channelTitle: string };
  statistics: { viewCount: string; likeCount: string };
}

const initialVideoDetail: TypeVideoDetail = {
  snippet: null,
  statistics: { viewCount: '0', likeCount: '0' },
};

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(initialVideoDetail);
  const [videos, setVideos] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return null;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div>
      <Head>
        <title>Video - {id}</title>
      </Head>

      <Box minHeight="95vh">
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                playing={true}
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: '#fff' }}
                py={1}
                px={2}
              >
                <Link href={`/channel/${channelId}`}>
                  <a>
                    <Typography variant="h6" color="#fff">
                      {channelTitle}
                      <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                    </Typography>
                  </a>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default VideoDetail;
