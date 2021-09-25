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
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Layout />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
