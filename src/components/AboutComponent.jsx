import { Container, Typography } from '@mui/material'
import React from 'react'

function AboutComponent() {
  return (
<Container className='py-5 lh-lg' 
sx={{
  paddingTop:15,
  
  

  color: 'text.primary'
  }}>
    <Typography
    textAlign="justify"
    lineHeight={1.8}
    fontSize='20px'
    >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat, repellat accusantium minima repellendus assumenda quae velit incidunt quos, modi sit accusamus reprehenderit nihil quis dicta quidem itaque voluptatem officia.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat, repellat accusantium minima repellendus assumenda quae velit incidunt quos, modi sit accusamus reprehenderit nihil quis dicta quidem itaque voluptatem officia.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat, repellat accusantium minima repellendus assumenda quae velit incidunt quos, modi sit accusamus reprehenderit nihil quis dicta quidem itaque voluptatem officia.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat, repellat accusantium minima repellendus assumenda quae velit incidunt quos, modi sit accusamus reprehenderit nihil quis dicta quidem itaque voluptatem officia.
    </Typography>
</Container>
  )
}

export default AboutComponent