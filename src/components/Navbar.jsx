import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { myMode } from '../atoms/atoms';
import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom';
import ModeButton from './ModeButton';
import { useRecoilState } from 'recoil';
function Navbar() {
  const [ModeTheme, setModeTheme] = useRecoilState(myMode);
  return (
 
    <AppBar position="static" color= 'primary' sx={{py:'5px'}}>
  <Toolbar variant="dense" >
    
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      {(ModeTheme === 'dark') ? <img src="/assets/logo-white.png" alt="" style={{width: "120px"}}/> : <img src="/assets/logo.png" alt="" style={{width: "120px"}}/> }
      
      
    </Typography>
      <ModeButton />
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } , justifyContent: 'flex-end'}}>
              <NavLink to='/' className='nav-link'> Home </NavLink>
              <NavLink to='/about' className='nav-link'> About </NavLink>
              <NavLink to='/products' className='nav-link'> Products </NavLink>
              <NavLink to='/contact' className='nav-link'> Contact </NavLink>
              <NavLink to='/register' className='nav-link'> Register </NavLink>
              <NavLink to='/cart' className='nav-link'> Cart </NavLink>
            
          </Box>
  </Toolbar>
</AppBar>

  )
}

export default Navbar