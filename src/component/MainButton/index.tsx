import React from 'react';
import { Button, ButtonProps } from '@mui/material';

function MainButton({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        width: 300,
        height: 48,
        borderRadius: 24,
        color: 'primary.main',
        border: '1px solid #FAFAFA',
        boxShadow: '0 10px 10px lightgray',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default MainButton;
