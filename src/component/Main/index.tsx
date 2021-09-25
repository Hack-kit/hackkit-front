import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

import MainButton from '../MainButton';
import API from '../../API';

function Main() {
  const history = useHistory();

  return (
    <GoogleLogin
      clientId="146643777204-ucvrmu64oi56gefidn6as5baudmrrg43.apps.googleusercontent.com"
      render={(props) => {
        return <MainButton {...props}>구글로 로그인</MainButton>;
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
  );
}

export default Main;
