import React from 'react';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Route path="/" exact>
            <div>main</div>
          </Route>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
