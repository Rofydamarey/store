import { Container, Grid } from '@mui/material'
import React from 'react'
import CardCategory from './CardCategory'

function CategoryComponent() {
  return (
    
<Container>
<Grid container  maxWidth="lg" marginTop={-15} marginBottom={20} className='CategoryComponent'
sx={{ display : 'flex' ,justifyContent: "space-around"}}
>
<CardCategory Path='./assets/category-1.jpg'/>
<CardCategory Path='./assets/category-2.jpg'/>
<CardCategory Path='./assets/category-3.jpg'/>

</Grid>
</Container>
    
  )
}

export default CategoryComponent