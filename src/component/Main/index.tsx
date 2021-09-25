import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { Typography, Box, Grid } from '@mui/material';
import { useRecoilState } from 'recoil';

import MainButton from '../MainButton';
import API from '../../API';
import Atom from './atoms';

function Main() {
  const history = useHistory();
  const [user, setUser] = useRecoilState(Atom.userAtom);

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
                    setUser(result);
                  });
                }
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <div css={{ width: '100%', height: '30vh' }} />
      )}
    </Box>
  );
}

export default Main;
