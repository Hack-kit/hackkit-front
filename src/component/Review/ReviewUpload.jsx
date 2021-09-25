import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' ,margin:'5ch'},
          
        }}
        noValidate
        autoComplete="off"
      >
        <div > 
          <TextField
            id="outlined-multiline-static"
            label="리뷰 작성"
            multiline
            rows={6}
            defaultValue="Default Value"
            placeholder="리뷰를 작성해주세요"
          />
        </div>
       
      </Box>
    );
  }
  