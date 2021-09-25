import React from 'react';
import { AppBar, IconButton, Grid, Typography } from '@mui/material';
import SVG from '../../svg';

export default () => (
  <Grid
    container
    wrap="nowrap"
    justifyContent="space-evenly"
    alignItems="center"
    mt={3}
  >
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <IconButton color="primary">
            <SVG.Vegetable css={{ width: 40, height: 40 }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            야채
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <IconButton color="primary">
            <SVG.Meat css={{ width: 40, height: 40 }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            과일
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <IconButton color="primary">
            <SVG.Harvest css={{ width: 40, height: 40 }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            육류
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <IconButton color="primary">
            <SVG.Fish css={{ width: 40, height: 40 }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            수산
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
