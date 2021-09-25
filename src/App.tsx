import React from 'react';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';

import Layout from './layout';

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
      })}
    >
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Layout />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
