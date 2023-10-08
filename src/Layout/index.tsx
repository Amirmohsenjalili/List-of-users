import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';

import { Prop } from './index.type'

const Layout: React.FC<Prop> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
