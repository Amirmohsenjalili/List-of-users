import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';
import styles from './styles';
import { Prop } from './types'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC<Prop> = ({ children }) => {

  return (
    <Box sx={styles.myBox}>
      <Header />
      <Sidebar />
      <Outlet />
      {children}
    </Box>
  );
};

export default Layout;
