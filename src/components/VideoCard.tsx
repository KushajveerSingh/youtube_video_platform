import Link from 'next/link';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import type { Item } from '../utils/apiTypes';

interface Props {
  video: Item;
}

const VideoCard = ({ video }: Props) => {
  const {
    id: { videoId },
    snippet,
  } = video;

  if (videoId == null) {
    return null;
  }

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link href={`/video/${videoId}`}>
        <a>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || '/no_image.jpg'}
            sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
          />
        </a>
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link href={`/video/${videoId}`}>
          <a>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet.title.slice(0, 60)}
            </Typography>
          </a>
        </Link>

        <Link href={`/channel/${snippet?.channelId}`}>
          <a>
            <Typography variant="subtitle2" color="gray">
              {snippet?.channelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
            </Typography>
          </a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
