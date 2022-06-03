import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React, { useEffect, useState } from 'react'
import '../App.css'
import SectionName from './SectionName';
import MainBtnComponent from './MainBtnComponent';
import { NavLink } from 'react-router-dom';
function FeaturedProduct() {
  const [Products , setProduct] = useState({
    Items : [
      {Title : 'T-shirts Green' , Price : 30 , Photo : './assets/product-1.jpg'},
      {Title : 'T-shirts Red' , Price : 60 , Photo : './assets/product-2.jpg'},
      {Title : 'T-shirts Blue' , Price : 20 , Photo : './assets/product-3.jpg'},
      {Title : 'T-shirts Gray' , Price : 80 , Photo : './assets/product-4.jpg'},

    ]
  }
  )



  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
      const getProducts = async () => {
          setLoading(true);
          const response = await fetch('https://fakestoreapi.com/products');
          if (componentMounted) {
              setData(await response.clone().json());
              setFilter(await response.json());
              setLoading(false);
          }
          return () => {
              componentMounted = false
          }
      }
      getProducts();

  }, [])
  const Loading = () => {
      return (
          <>
          Loading ...
              {/* <div className="col-md-3">
                  <SkeletonTheme height={350} />
              </div>
              <div className="col-md-3">
                  <SkeletonTheme height={350} />
              </div>
              <div className="col-md-3">
                  <SkeletonTheme height={350} />
              </div>
              <div className="col-md-3">
                  <SkeletonTheme height={350} />
              </div> */}
          </>
      );
  };
  const filterProduct = (cat) =>{
      const updatedList = data.filter( (x) => x.category === cat );
      setFilter(updatedList);
  }
















  return (
    <Container>
        <SectionName Title="Featured Products"/>
      

        <Grid container spacing={3} >
                {filter.map((product,index) => {
                  if (index <= 3){
                    return (
                      
                      <Grid key={product.id} item md={3} className="col-md-3 mb-4" style={{marginBottom:15}}>
                          <Card className="card h-100 text-center p-4" >
                              <CardMedia image={product.image} component='img' className="card-img-top" alt={product.title} height='250px'/>
                              <CardContent className="card-body">
                                  <Typography fontWeight='bold' component='h5' className="card-title">{product.title.substring(0 ,12)}...</Typography>
                                  <Typography  fontWeight='bold'className="card-text">${product.price}</Typography>
                              </CardContent>
                                  <CardActions>
                                  <NavLink to={`/products/${product.id}`}>
                                    <Button variant='outlined' color='primary'>
                                      Buy Now
                                    </Button>
                                  </NavLink>
                                  </CardActions>
                          </Card>
                      </Grid>
              )
                  }else{
                    return;
                  }

                  }
                  
                  )
                  
                }
                </Grid>
    
      

      <MainBtnComponent Title='Explore'/>

    </Container>
  )
}

export default FeaturedProduct