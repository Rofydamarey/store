import { Box, Button, Grid, Typography } from '@mui/material'

import React from 'react'
import '../App.css'
import MainBtnComponent from './MainBtnComponent';
function ExclusiveComponent() {
  return (
    <Box className='ExclusiveComponent'>
        <Grid container>

            <Grid item sm={6}>
                <img src="./assets/exclusive.png"/>
            </Grid>
            <Grid item sm={6}>

        <Typography variant='p' color='GrayText'>
        Exclusive Available on RedStore
        </Typography>
        <Typography variant='h3' fontWeight='bolder'>
        Smart Band 4
        </Typography>
        <Typography variant='p' color='GrayText'>
        The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.
        </Typography>

<MainBtnComponent Title='Buy Now'/>

            </Grid>
        </Grid>
    </Box>
  )
}

export default ExclusiveComponent