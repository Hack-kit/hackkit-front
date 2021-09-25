import React from 'react';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';

import Layout from './layout';
import ProductList from './component/ProductList/ProductList';
import Category from './component/Category/Category';
import StoreManage from './component/StoreManage/StoreManage';
import UploadText from './component/Upload/UploadText';
import UploadButton from './component/Upload/UploadButton';

function App(): JSX.Element {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: '#000000',
          },
          secondary: {
            main: '#FFFFFF',
          },
        },
        typography: {
          fontFamily: 'AppleSDGothicNeo sans-serif',
        },
      })}
    >
      <CssBaseline />
      <UploadButton />
      <StyledEngineProvider injectFirst>
        <Layout />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
