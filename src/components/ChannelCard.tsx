import Link from 'next/link';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import type { Item } from '../utils/apiTypes';

interface Props {
  channelDetail?: Item;
  marginTop?: string;
}

const ChannelCard = ({ channelDetail, marginTop }: Props) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link href={`/channel/${channelDetail?.id?.channelId}`}>
        <a>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url || '/no_image.jpg'}
              sx={{
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                mb: 2,
                border: '1px solid #e3e3e3',
              }}
            />
            <Typography variant="h6">
              {channelDetail?.snippet?.title}{' '}
              <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
              {channelDetail?.statistics?.subscriberCount && (
                <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                  {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
                    'en-US'
                  )}{' '}
                  Subscribers
                </Typography>
              )}
            </Typography>
          </CardContent>
        </a>
      </Link>
    </Box>
  );
};

export default ChannelCard;
