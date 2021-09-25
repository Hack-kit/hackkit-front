import React from 'react';
import { AppBar, IconButton, Grid } from '@mui/material';
import SVG from '../../svg';

export default()=>(
    <Grid container >
        <Grid item>
            <IconButton color="primary">
            <SVG.Vegetable css={{width:60,height:60}}/>
            야채
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton color="primary">
            <SVG.Meat css={{width:60,height:60}}/>
            과일
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton color="primary">
            <SVG.Harvest css={{width:60,height:60}}/>
            육류
            </IconButton>
        </Grid>
        <Grid item>
            <IconButton color="primary">
            <SVG.Fish css={{width:60,height:60}}/>
            수산
            </IconButton>
        </Grid>
    </Grid>
)