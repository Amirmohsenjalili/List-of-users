import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';
import { Main } from './Header';

import { Prop } from './types'

const Layout: React.FC<Prop> = ({ children }) => {
  let open: boolean = false;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <Main open={open}>
      {children}
      </Main>
    </Box>
  );
};

export default Layout;
