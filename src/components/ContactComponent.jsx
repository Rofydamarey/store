import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function ContactComponent() {
  return (
    <div>
<Container>
<Grid container>
<Grid item xs={6}>
    <img src='./assets/image1.png' className='w-100'/>
</Grid>
<Grid item xs={6} display='flex' justifyContent='center'>
<Box
sx={{
    backgroundImage : "radial-gradient(#fff , #ffd6d6)",
    backgroundColor : "#ff523b",
    width : '500px',
    textAlign : 'center',
    borderRadius : '10px',
    paddingX: '15px',
    paddingY: '25px',
}}
>
<Grid container spacing={2} >
    <Grid item xs={12}>
<Typography variant='h3' color='#ff523b' fontWeight='bold'>
    Contact Us
</Typography>
    </Grid>
    <Grid item xs={6} >
    <TextField id="firstname" label="First Name" variant="filled"  />
                </Grid>
    <Grid item xs={6} >
    <TextField id="lastname" label="Last Name" variant="filled" />
                </Grid>
    <Grid item xs={12} >
<FormControl fullWidth >
  <TextField id="lastname" label="Email Address" variant="filled"/>
</FormControl>
                </Grid>
    <Grid item xs={12} >

<TextField
          id="filled-number"
          fullWidth
          
          label="Phone Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
                </Grid>
        <Grid item xs={12}>
        <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          fullWidth
          rows={4}
          variant="filled"
        />
        </Grid>
</Grid>
</Box>
</Grid>
</Grid>
</Container>
    </div>
  )
}

export default ContactComponent