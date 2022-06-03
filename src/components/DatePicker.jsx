import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Box, Container } from '@mui/system';
import '../App.css'
import { formatDistance } from 'date-fns';
export default function DatePicker() {
  const [value, setValue] = React.useState(new Date());
  const today = new Date();
    const distance = formatDistance(value,today)
  return (
<Container >
<Box className="DateTimePicker">
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue)
          console.log(today)
          console.log(distance)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
</Box>
</Container>
  );
}
