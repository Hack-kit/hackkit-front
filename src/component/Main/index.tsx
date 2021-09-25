import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { Typography, Box, Grid } from '@mui/material';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MainButton from '../MainButton';
import API from '../../API';
import Atom from './atoms';
import image from './img.png';
import Category from '../Category/Category';
import ProductList from '../ProductList/ProductList';

function Main() {
  const history = useHistory();
  const [user, setUser] = useRecoilState(Atom.userAtom);
  const setAccessToken = useSetRecoilState(Atom.accessTokenAtom);

  return (
    <Box>
      {user === undefined ? (
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <GoogleLogin
              clientId="146643777204-ucvrmu64oi56gefidn6as5baudmrrg43.apps.googleusercontent.com"
              isSignedIn={false}
              render={(props) => {
                return (
                  <MainButton {...props}>
                    <Typography sx={{ color: 'primary.dark', fontSize: 14 }}>
                      구글<span css={{ color: 'black' }}>로 회원가입</span>
                    </Typography>
                  </MainButton>
                );
              }}
              onSuccess={(res) => {
                if ('googleId' in res) {
                  API.validateUser(res.googleId).then((result) => {
                    if (result) {
                      history.push('/signup', {
                        googleId: res.googleId,
                      });
                    }
                  });
                }
              }}
            />
          </Grid>
          <Grid item>
            <GoogleLogin
              clientId="146643777204-ucvrmu64oi56gefidn6as5baudmrrg43.apps.googleusercontent.com"
              isSignedIn={false}
              render={(props) => {
                return (
                  <MainButton {...props}>
                    <Typography sx={{ color: 'primary.dark', fontSize: 14 }}>
                      구글<span css={{ color: 'black' }}>로 로그인</span>
                    </Typography>
                  </MainButton>
                );
              }}
              onSuccess={(res) => {
                if ('googleId' in res) {
                  API.login(res.googleId).then((result) => {
                    if (result !== undefined) {
                      setUser(result.user);
                      setAccessToken(result.token);
                    }
                  });
                }
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Slider speed={500} dots infinite slidesToShow={1} slidesToScroll={1}>
          <img src={image} alt="food" />
          <img src={image} alt="food" />
          <img src={image} alt="food" />
        </Slider>
      )}
      <Category />
      <ProductList />
    </Box>
  );
}

export default Main;
