import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import '../App.css'
// import BannerImage from '/assets/image1.png'
function Banner() {
  return (
    <div>

    <Box className='banner' style={{background: `radial-gradient(#fff , #ffd6d6)`}}>


<Container>
<Grid container spacing={2}>
<Grid item xs={6} sx={{display:{'sm' : 'none' , 'md' : 'flex'} , alignItems : 'center'}}>
          
          <Box>
          <Typography
                    variant="h2" 
                    component="p"
                    color="black"
                    fontWeight='bold'
                    >
                    Give Your Workout <br/>A New Style !
                    </Typography>
          
                <br/>
                    <Typography
                    variant="h6" 
                    component="p"
                    color="GrayText"
                    lineHeight={1.5}          
                    >
                    Success isn't always about greatness. It's about consistency. Consistent
                    hard work gain success. Gretness will come.
                    </Typography>
          </Box>
                    
                  </Grid>
<Grid item xs={6}><img src="/assets/image1.png" alt="" style={{width: "100%" }} /></Grid>

</Grid>

</Container>



        {/*  */}
    </Box>
    </div>
  )
}

export default Banner