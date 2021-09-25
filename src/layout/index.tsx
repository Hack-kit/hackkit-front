import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BottomNavigation from './BottomNavigation';
import Header from './Header';
import Signup from '../component/Signup';
import Main from '../component/Main';

export default function Layout(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <BottomNavigation />
    </BrowserRouter>
  );
}
