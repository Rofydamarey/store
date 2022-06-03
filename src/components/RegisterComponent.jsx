import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Container, FilledInput, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'
import '../App.css'
import MainBtnComponent from './MainBtnComponent';
function RegisterComponent() {
    const [values, setValues] = React.useState({
        password: '',
        c_password: '',
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

    <Grid item xs={6} >
    <TextField id="firstname" label="First Name" variant="filled" />
                </Grid>
    <Grid item xs={6} >
    <TextField id="lastname" label="Last Name" variant="filled" />
                </Grid>
    <Grid item xs={12} >
<FormControl fullWidth >
  <TextField id="email" label="Email Address" variant="filled"/>
</FormControl>
                </Grid>
    <Grid item xs={12} >
{/* *************************************** */}
<FormControl  variant="filled" fullWidth>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
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
{/* *************************************** */}
<Grid item xs={12} >
    
<FormControl  variant="filled" fullWidth>
          <InputLabel htmlFor="filled-adornment-c_password">Confirm Password</InputLabel>
          <FilledInput
            id="filled-adornment-c_password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.c_password}
            onChange={handleChange('c_password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle c_password visibility"
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
{/* *************************************** */}
                </Grid>
        <Grid item xs={12}>
            <MainBtnComponent Title="Register"/>
        </Grid>
</Grid>




  )
}

export default RegisterComponent