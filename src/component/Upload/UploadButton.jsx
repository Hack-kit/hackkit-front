import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BasicButtons() {
  const ColorButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(lightgreen[500]),
    // backgroundColor: lightgreen[500],
    '&:hover': {
      // backgroundColor: lightgreen[700],
    },
  }));
  return (
    <Stack spacing={3} direction="column">
      <ColorButton variant="contained">등록하기</ColorButton>
      <ColorButton variant="contained">취소하기</ColorButton>
    </Stack>
  );
}
