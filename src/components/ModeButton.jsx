import  React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { style } from '@mui/system';
import { useRecoilState } from 'recoil';
import { myMode } from '../atoms/atoms';



export default function ModeButton() {
  const [selected, setSelected] = useState(false);
  const [ModeTheme, setModeTheme] = useRecoilState(myMode);

  console.log(ModeTheme)

  

  return (
    <ToggleButton
      value="check"
      color='error'
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        setModeTheme(!selected ? 'dark' : 'light');
    }}
    sx={{mx: 10 , p: 0 , color : 'red'}}
    
    >


{selected ? <LightModeIcon/> : <ModeNightIcon />}
    </ToggleButton>
  );
}
