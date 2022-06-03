import { Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartStore, dateOfPicker } from '../atoms/atoms';
import DatePicker from '../components/DatePicker';

function Cart() {
  const cart = useRecoilValue(cartStore);
  const value = useRecoilValue(dateOfPicker);
  console.log(`you will deliver whithin ${value}`)
  const [totalPrice , setTotalPrice] = useState([]);
  const AllPrice =(prev , curr)=>{
    return (prev + curr)
  }


  
  return (
    <Box sx={{ my: 5 }}>
      <Container>
      <Grid container spacing={5} sx={{justifyContent: 'space-between'}}>
          <Grid  item xs={8}>
          <Typography variant='h4' color="text.primary">
          Shopping Cart
          </Typography>
          <Divider sx={{bgcolor: '#aaa'}} />
{cart.map((product) => {
  return(
    <Grid container sx={{my: '20px' , overflow: 'hidden'}}>
    <Grid  item xs={3} sx={{height: '200px'}} >
      <img src={product.image} style={{width: '100%'}}/>
    </Grid>
    <Grid  item xs={9} sx={{display: 'flex' , justifyContent: 'space-around' , flexDirection: 'column', pl:'20px'}}>
      <Typography variant="p" component='p' color="text.secondary">{product.category}</Typography>
      <Typography variant="p" component='p' color="text.secondary">{product.title}</Typography>
      <Typography variant="p" component='p' color="text.secondary">{product.rate}</Typography>
      <Typography variant="p" component='p' color="text.secondary">{product.price}</Typography>
      <Typography variant="p" component='p' color="text.secondary">Quantity : {product.length}</Typography>

    </Grid>
    </Grid>
  )
}





)


}

          <Typography variant="h6" align='right' color="text.secondary">Subtotal (1 item)
          </Typography>
          <Typography variant="h5">EGP699.00</Typography>
          </Grid>


          <Grid container item xs={4} sx={{ }} >

          <Grid item xs={12}>
          <DatePicker/>
          </Grid>
          <Grid item xs={12}>
          <Card sx={{ minWidth: 275 , p: '20px'}}>
      <CardContent>
      <Typography variant="h6" color="text.secondary">Subtotal (1 item)</Typography>
        <Typography variant="h5">EGP{totalPrice}</Typography>

        <Typography variant="body2">
          {/* you will deliver whithin {value} */}
        </Typography>
        <Typography variant="body2">
          We Are Happy to Make You Happy
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="warning" style={{width: '100%'}}>
          Proceed to checkout
          </Button>
      </CardActions>
    </Card>
          </Grid>

          </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default Cart