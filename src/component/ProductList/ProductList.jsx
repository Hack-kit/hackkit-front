import React from "react";
import { Grid, Box ,Divider,Button,Typography} from "@mui/material";
import ProductList1 from "./ProductList1.png";
import ProductList2 from "./ProductList2.png";
import ProductList3 from "./ProductList3.png";
import ProductList4 from "./ProductList4.png";
import "./ProductList.css";



export default () => (
    <Grid container spacing={1} px={2}>
      <Grid item xs={12} >
        <Box bgcolor="secondary"  sx={{ display: 'inline' }} color="info.contrastText" p={2} >
        <Grid container spacing={2} > 
        <Grid item xs={6}>
        <img src={ProductList1} alt="" className="productImg"/>
        </Grid>
        <Grid item xs={6} color="primary" >
        <Typography color="primary">
            흙대파 1단
        </Typography>
        <Typography color="primary">
            얼음골칡냉면
        </Typography>
        <Typography color="primary">
            1.3km 용인시 수지구
        </Typography>
        <Typography color="primary">
            9000원
        </Typography>
        </Grid>
        </Grid>
        </Box>
      </Grid>
      <Divider width="100%"/>
      <Grid item xs={12}>
        <Box bgcolor="secondary" sx={{ display: 'inline' }} color="info.contrastText" p={2}>
        <Grid container spacing={2} > 
        <Grid item xs={6}>
        <img src={ProductList2} alt="" className="productImg"/>
        </Grid>
        <Grid item xs={6} >
        <Typography color="primary">
            흙대파 1단
        </Typography>
        <Typography color="primary">
            얼음골칡냉면
        </Typography>
        <Typography color="primary">
            1.3km 용인시 수지구
        </Typography>
        <Typography color="primary">
            9000원
        </Typography>
        </Grid>
        </Grid>
        </Box>
      </Grid>
      <Divider width="100%"/>
      <Grid item xs={12}>
        <Box bgcolor="secondary" sx={{ display: 'inline' }} color="info.contrastText" p={2}>
        <Grid container spacing={2} > 
        <Grid item xs={6}>
        <img src={ProductList3} alt="" className="productImg"/>
        </Grid>
        <Grid item xs={6} >
        <Typography color="primary">
            흙대파 1단
        </Typography>
        <Typography color="primary">
            얼음골칡냉면
        </Typography>
        <Typography color="primary">
            1.3km 용인시 수지구
        </Typography>
        <Typography color="primary">
            9000원
        </Typography>
        </Grid>
        </Grid>
        </Box>
      </Grid>
      <Divider width="100%"/>
      <Grid item xs={12}>
        <Box bgcolor="secondary" sx={{ display: 'inline' }} color="info.contrastText" p={2}>
        <Grid container spacing={2} > 
        <Grid item xs={6}>
        <img src={ProductList4} alt="" className="productImg"/>
        </Grid>
        <Grid item xs={6} >
        <Typography color="primary">
            흙대파 1단
        </Typography>
        <Typography color="primary">
            얼음골칡냉면
        </Typography>
        <Typography color="primary">
            1.3km 용인시 수지구
        </Typography>
        <Typography color="primary">
            9000원
        </Typography>
        </Grid>
        </Grid>
        </Box>
      </Grid>
      <Divider width="100%"/>
    </Grid>
 
);