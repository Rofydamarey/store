import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function SectionName(props) {
  return (
<Container sx={{display: 'flex' , justifyContent: 'center' , my: '20px'}}>
<Typography className='SectionName' textAlign='center' color='text.primary'>{props.Title}</Typography>
</Container>
  )
}

export default SectionName