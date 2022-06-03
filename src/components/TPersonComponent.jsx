import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, Grid, Rating } from '@mui/material';
export default function TPersonComponent(props) {
  const People = props.People;
  return (

<>
{People.map( (person , index) =>
<Grid item key={index} xs={12} sm={6} md={4} lg={3} >
  
  <Card elevation={3} >
  <CardActionArea>

  <CardContent sx={{textAlign:'center'}} >
    <FormatQuoteIcon sx={{color:'#ff523b' , fontSize: '60px' }}/>

      <Typography variant="body2" color="text.secondary">
      ${person.Opinion}
      </Typography>
      <Rating name="read-only" value={person.value} readOnly sx={{color:'#ff523b'}} />
      <Avatar
  alt="Remy Sharp"
  src={person.Photo}
  sx={{ width: 56, height: 56 , marginX:'auto' }}
/>
<Typography gutterBottom variant="h5" component="div">
      {person.Name}
      
      </Typography>

    </CardContent>

    </CardActionArea>
  </Card>
</Grid>
  
  )
}

</>
  );
}

