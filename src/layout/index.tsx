import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Box } from '@mui/material';
import BottomNavigation from './BottomNavigation';
import Header from './Header';
import Signup from '../component/Signup';
import Main from '../component/Main';

export default function Layout(): JSX.Element {
  return (
    <BrowserRouter>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <BottomNavigation />
      </Box>
    </BrowserRouter>
  );
}
