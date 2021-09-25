import React from 'react';
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

import { RecoilRoot } from 'recoil';
import Layout from './layout';
import UploadButton from './component/Upload/UploadButton';

function App(): JSX.Element {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: '#DEF7D6',
            dark: '#329E5D',
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
      <StyledEngineProvider injectFirst>
        <RecoilRoot>
          <Layout />
        </RecoilRoot>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
