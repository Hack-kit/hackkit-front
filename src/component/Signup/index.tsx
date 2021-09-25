import React from 'react';
import {
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
  TextField,
  InputAdornment,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { useLocation } from 'react-router-dom';
import API from '../../API';
import SVG from '../../svg';
import MainButton from '../MainButton';
import { ISignupBody } from './interface';

const StyledTab = styled(Tab)({
  height: 32,
  borderBottom: '1px solid #707070',
  '&.Mui-selected': {
    border: '1px solid #C3C3C3',
  },
});

const FullWidthTextField = styled(TextField)({
  width: '100%',
});

function Signup() {
  const location = useLocation<{ googleId: string }>();
  const { handleSubmit, setValue, control, watch, reset } =
    useForm<ISignupBody>({
      defaultValues: {
        user_type: 'owner',
        email: '',
        nickname: '',
        address: {
          text: '',
        },
        username: '',
        number: '',
        google_id: location.state.googleId,
      },
    });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        API.signupUser(data).then((res) => {
          console.log(res);
        });
      })}
    >
      <Paper variant="outlined" sx={{ border: 'none' }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          flexWrap="nowrap"
          spacing={6}
        >
          <Grid item sx={{ mt: 4 }}>
            <Typography variant="h2" sx={{ fontSize: '2.5rem' }}>
              회원가입
            </Typography>
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Tabs
              value={watch('user_type')}
              centered
              variant="fullWidth"
              onChange={(evt, tabValue) => {
                reset();
                setValue('user_type', tabValue);
              }}
              sx={{
                px: 4,
              }}
            >
              <StyledTab label="업주" value="owner" disableRipple />
              <StyledTab label="고객" value="customer" disableRipple />
            </Tabs>
            <Paper variant="outlined" sx={{ border: 'none' }}>
              <Grid container px={4} spacing={4} mt={3}>
                <Grid item xs={12}>
                  <Controller
                    render={({ field }) => {
                      return (
                        <FullWidthTextField
                          type="text"
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SVG.Location
                                  css={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 16,
                                  }}
                                />
                              </InputAdornment>
                            ),
                            placeholder:
                              watch('user_type') === 'owner'
                                ? '가게이름'
                                : '닉네임',
                          }}
                          {...field}
                        />
                      );
                    }}
                    name="nickname"
                    control={control}
                    rules={{
                      required: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    render={({ field }) => {
                      return (
                        <FullWidthTextField
                          type="text"
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SVG.Location
                                  css={{
                                    width: 20,
                                    height: 20,
                                    marginRight: 16,
                                  }}
                                />
                              </InputAdornment>
                            ),
                            placeholder:
                              watch('user_type') === 'owner'
                                ? '가게주소'
                                : '자택주소',
                          }}
                          {...field}
                        />
                      );
                    }}
                    name="address.text"
                    control={control}
                    rules={{
                      required: true,
                    }}
                  />
                </Grid>
                {watch('user_type') === 'owner' && (
                  <Grid item xs={12}>
                    <Controller
                      render={({ field }) => {
                        return (
                          <FullWidthTextField
                            type="text"
                            variant="standard"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SVG.Location
                                    css={{
                                      width: 20,
                                      height: 20,
                                      marginRight: 16,
                                    }}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: '가게 전화번호',
                            }}
                            {...field}
                          />
                        );
                      }}
                      name="number"
                      control={control}
                      rules={{
                        required: true,
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <MainButton type="submit">구글로 회원가입</MainButton>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}

export default Signup;
