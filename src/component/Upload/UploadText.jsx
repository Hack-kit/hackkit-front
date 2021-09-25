import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function UploadText(){
    const [value, setValue] = React.useState(new Date());

    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
            width:"100%" ,
            padding:"15%"
          }}
          
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="식자재 이름" variant="standard" />
      
          <div>
        <FormControl component="fieldset" sx={{width:"100%"}}>
      <FormLabel component="legend">식자재 종류</FormLabel>
      <RadioGroup row aria-label="category" name="row-radio-buttons-group">
        <FormControlLabel value="vegetable" control={<Radio />} label="야채" />
        <FormControlLabel value="meat" control={<Radio />} label="육류" />
        <FormControlLabel value="fish" control={<Radio />} label="수산" />
        <FormControlLabel value="fruit" control={<Radio />} label="과일" />
      </RadioGroup>
    </FormControl>
        </div>
          <TextField id="standard-basic" label="상세정보 (예:100g당 1000원)" variant="standard" />
         <div >
         <Typography id="input-slider" gutterBottom>
        수량
      </Typography>
         <Slider defaultValue={1} aria-label="Default" valueLabelDisplay="auto" 
         min={1}
         max={10} />
         </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
        </Box>
      );
}