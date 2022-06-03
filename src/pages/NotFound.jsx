import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function NotFound() {
  return (
    <div>
      
      <Grid container>
        <Grid item xs={6}>
        <div className="text404">
        <p>Sorry!</p>
          <p>We can't seem to find the resource you're looking for.</p>
          <p>Please check that the Web site address is spelled correctly.</p>
          <p>Or go to our <Link to='/'>home page</Link> , and use the menus to navigate to a specific section.</p>
        </div>
        </Grid>
        <Grid item  xs={6} >
          
          <div className='Logo404'> <p>RED</p> <p>STORE</p> <p>404!</p> </div>

        </Grid>
      </Grid>
      
    </div>
  )
}

export default NotFound