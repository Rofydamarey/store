// import { cartStore } from '../atoms/atoms'; 
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from 'recoil';
// 888888888888888888888888888888888888
import { Star } from '@mui/icons-material';
import { Button, Container, Grid, Skeleton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
function Product() {


  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct();

  }, [])
  const Loading = () => {
    return (
      <>
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Skeleton height={700} width={500} />

            </Grid>
            <Grid item md={6} style={{ lineHeight: 2 }}>
              <Skeleton height={50} width={300} />
              <Skeleton height={75} />
              <Skeleton height={25} width={150} />
              <Skeleton height={50} />
              <Skeleton height={150} />
              <Skeleton height={50} width={100} />
              <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
  const ShowProduct = () => {
    return (
      <>
        <Container>
          <Grid container paddingY={5} >
            <Grid item md={6} paddingTop={5}>
              <img src={product.image} alt={product.title} height="400px" width="400px" />
            </Grid>
            <Grid item md={6}>
              <Typography variant='h3' textTransform='uppercase' color='text.secondary' >{product.category}</Typography>
              <Typography variant='h5' fontWeight='bold' color='text.primary'>{product.title}</Typography>
              <Typography variant='p' fontWeight='bold' color={'orange'} > Rating {product.rating && product.rating.rate}  <Star /> </Typography>
              <Typography variant='h5' my={4} fontWeight='bold' color='text.primary'> $ {product.price} </Typography>
              <Typography variant='p' component='p' color='text.primary'> {product.description}</Typography>
              <Button paddingX={4} paddingY={2} variant="contained" color="warning"> Add to Cart</Button>
              <NavLink to='/cart'>
                <Button paddingX={3} paddingY={2} variant="contained" color="warning" sx={{ mx: '10px' }} >
                  Go to Cart
                </Button>
              </NavLink>



            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
  return (
    <>


      {loading ? <Loading /> : <ShowProduct />}


    </>
  )
}

export default Product