import React from 'react';
import { AppBar, Grid, IconButton, Typography } from '@mui/material';

import SVG from '../svg';

export default function Header(): JSX.Element {
  return (
    <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        px={2}
        height={58}
      >
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography align="center">로고</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <SVG.Search css={{ width: 20, height: 20 }} />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}
