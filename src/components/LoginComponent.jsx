import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Container, FilledInput, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import '../App.css'
import MainBtnComponent from './MainBtnComponent';
function LoginComponent() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (



<Grid container spacing={2} >
    <Grid item xs={12}>
{/* <Typography variant='h3' color='#ff523b' fontWeight='bold'>
    Login 
</Typography> */}
    </Grid>

    <Grid item xs={12} >
<FormControl fullWidth >
  <TextField id="login-email" label="Email Address" variant="filled"/>
</FormControl>
                </Grid>
    <Grid item xs={12} >
{/* *************************************** */}
<FormControl  variant="filled" fullWidth>
          <InputLabel htmlFor="login-password">Password</InputLabel>
          <FilledInput
            id="login-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
</Grid>
{/* *************************************** */}

        <Grid item xs={12}>
            <MainBtnComponent Title="Login"/>
        </Grid>
</Grid>




  )
}

export default LoginComponent