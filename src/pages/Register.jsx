import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import RegisterComponent from '../components/RegisterComponent'
import '../App.css'
import LoginComponent from '../components/LoginComponent'
import FullWidthTabs from '../components/tab'
function Register() {
  
  return (
    <div className='Register'>
<Container>

      {/* <RegisterComponent/> */}
      {/* <LoginComponent/> */}
      <Box
sx={{
    backgroundImage : "radial-gradient(#fff , #ffd6d6)",
    backgroundColor : "#ff523b",
    width : '500px',
    marginX: 'auto',
    height : '510px' ,
    textAlign : 'center',
    borderRadius : '10px',
    paddingX: '15px',
    paddingY: '25px',
}}
>
<FullWidthTabs/>
{/* <Grid container>
  <Grid item xs={6}><RegisterComponent/></Grid>
  <Grid item xs={6}><LoginComponent/></Grid>
</Grid> */}

</Box>
</Container>


    </div>
  )
}

export default Register