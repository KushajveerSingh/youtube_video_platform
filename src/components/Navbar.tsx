import Image from 'next/image';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import type { ReactNode } from 'react';

import { SearchBar } from './';

interface Props {
  children: ReactNode;
}

const Navbar = ({ children }: Props) => {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: 'sticky',
          background: '#000',
          top: 0,
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <a>
            <Image src="/youtube_logo.png" alt="youtube logo" height={45} width={45} />
          </a>
        </Link>
        <SearchBar />
      </Stack>
      {children}
    </Box>
  );
};

export default Navbar;
