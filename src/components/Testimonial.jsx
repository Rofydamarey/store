import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import '../App.css'

import SectionName from './SectionName';
import TPersonComponent from './TPersonComponent'
export default function Testimonial() {
  const [People , setProduct] = useState({
    Items : [
      {Name : 'Sean Parker' , Opinion : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` , Photo : './assets/user-1.png' , value : 3},
      {Name : 'Mike Smith' , Opinion : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` , Photo : './assets/user-2.png' , value : 4},
      {Name : 'Mabel Joe' , Opinion : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` , Photo : './assets/user-3.png' , value : 3},

    ]
  }
  )
  return (
    <Container >
        <SectionName Title="Testimonial"/>
      <Grid container spacing={1} justifyContent='space-around' marginTop={15}>

    <TPersonComponent People={People.Items} />
    
      </Grid>


    </Container>
  )
}