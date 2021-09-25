import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
    display: 'none',
  });
  
  export default function UploadImg() {
    return (
      <Stack direction="row" alignItems="center" spacing={2} width="100%" padding="10%" >
        <label htmlFor="contained-button-file" >
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span" >
            식자재 사진을 등록해주세요
          </Button>
        </label>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            영수증 사진을 등록해주세요
          </Button>
        </label>
        
      </Stack>
    );
  }