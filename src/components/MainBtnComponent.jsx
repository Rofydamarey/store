import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function MainBtnComponent(props) {
  let navigate = useNavigate()
  return (
    <Box className='Explore' >
    <Button variant="contained" 
    endIcon={<ArrowRightAltIcon />}
    // onClick={() => {
    //   navigate(`/Products`);
    // }}
    > {props.Title} </Button>
    
    </Box>
  )
}

export default MainBtnComponent