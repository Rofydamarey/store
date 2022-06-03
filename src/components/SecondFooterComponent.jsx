import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import SubscribButton from './SubscribButton'

function SecondFooterComponent() {
  return (

      
      
      <>
      <Box className='bg-dark text-light main-footer' style={{backgroundColor: '#000'}} paddingBottom={4} paddingTop={6}>
<Container>
<Grid container >
      <Grid item xs={4}>
        <Typography 
        variant='h6'
        >
        Download our App
        </Typography>
        <Typography 
        variant='body'
        color='GrayText'
        fontSize={15}
        >
        Download App for Android and ios mobile phone.
        </Typography>

      <Grid container marginTop={3}>
        <Grid item xs={4} marginX={1} >
          <img src='./assets/play-store.png' style={{width: '100%'}} />
        </Grid>
        <Grid item xs={4} marginX={1} >
          <img src='./assets/app-store.png' style={{width: '100%'}} />

        </Grid>
      </Grid>


        </Grid>
        <Grid item xs={4} textAlign='center'>
          <Box marginBottom={1}>
          <img src="./assets/logo-white.png" style={{width: '50%'}} />
          </Box>
        <Typography
        variant='body'
        color='GrayText'
        fontSize={15}
        >
        Our Purpose Is To Sustainably Make th Pleasure and Benefits of Sports Accessible to the Many.
        </Typography>
        </Grid>
      <Grid item xs={4} sx={{display:'flex',alignItems: 'center'}}>
      <SubscribButton/>
      </Grid>
    </Grid>
</Container>
</Box>
<div className='divider'></div>   
</>




      
    
  )
}

export default SecondFooterComponent