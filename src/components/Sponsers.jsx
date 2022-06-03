import { Container, Grid } from '@mui/material'
import React from 'react'
import '../App.css'
function Sponsers() {
  return (
    <Container>
<Grid container className='Sponsers' marginY={15}  sx={{
  justifyContent: 'space-around'
}}>
    <Grid item> <img src="./assets/logo-godrej.png" alt="" /> </Grid>
    <Grid item> <img src="./assets/logo-oppo.png" alt="" /> </Grid>
    <Grid item> <img src="./assets/logo-coca-cola.png" alt="" /> </Grid>
    <Grid item> <img src="./assets/logo-paypal.png" alt="" /> </Grid>
    <Grid item> <img src="./assets/logo-philips.png" alt="" /> </Grid>

  </Grid>
</Container>
  )
}

export default Sponsers