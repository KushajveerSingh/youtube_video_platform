import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';
import type { Item } from '../utils/apiTypes';

interface Props {
  videos: Item[] | null;
  direction?: any;
}

const Videos = ({ videos, direction }: Props) => {
  if (!videos?.length) return null;

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      alignItems="start"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
