import React from 'react';
import { Grid, Box, Divider, Button, Typography } from '@mui/material';
import ProductList1 from './ProductList1.png';
import ProductList2 from './ProductList2.png';
import ProductList3 from './ProductList3.png';
import ProductList4 from './ProductList4.png';
import './ProductList.css';
import API from '../../API';
import { useRecoilValue } from 'recoil';
import Atom from '../Main/atoms';

export default () => {
  const accessToken = useRecoilValue(Atom.accessTokenAtom);
  const [foods, setFoods] = React.useState([
    { name: 'asdf', description: 'asdfasdf' },
  ]);

  React.useEffect(() => {
    if (accessToken) {
      API.getFoods(accessToken).then((res) => {
        // setFoods(res);
      });
    }
  }, [accessToken]);

  return (
    <Grid container spacing={1} px={2}>
      {foods.map((food) => {
        return (
          <>
            <Grid item xs={12}>
              <Box
                bgcolor="secondary"
                sx={{ display: 'inline' }}
                color="info.contrastText"
                p={2}
              >
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <img src={ProductList1} alt="" className="productImg" />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography color="black">{food.name}</Typography>
                    <Typography color="black">{food.description}</Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: 'primary.dark',
                        color: 'primary.dark',
                      }}
                    >
                      주문하기
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Divider width="100%" />
          </>
        );
      })}
    </Grid>
  );
};
