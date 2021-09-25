import React from 'react';
import { AppBar, IconButton, Grid } from '@mui/material';

import SVG from '../svg';

export default function BottomNavigation(): JSX.Element {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      component="nav"
      sx={{
        bottom: 0,
        top: 'auto',
      }}
    >
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: 50 }}
      >
        <Grid item>
          <IconButton color="inherit">
            <SVG.Home css={{ width: 20, height: 20 }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit">
            <SVG.User css={{ width: 20, height: 20 }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit">
            <SVG.Choices css={{ width: 20, height: 20 }} />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}
