import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BasicButtons() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.common.black,
        backgroundColor: theme.palette.primary.main,
        width:"60%",
        borderRadius:"30px",
        padding:"10px"
      }));
    return (
      <Stack spacing={3} direction="column" alignItems="center" >
        <ColorButton variant="contained" >등록하기</ColorButton>
        <ColorButton variant="contained" >취소하기</ColorButton>
      </Stack>
    );
  }