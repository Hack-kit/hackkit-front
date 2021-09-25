import React from 'react';
import { Button } from '@mui/material';

export default function Button({ children }) {
  return (
    <Button variant="contained" color="secondary">
      {children}
    </Button>
  );
}
