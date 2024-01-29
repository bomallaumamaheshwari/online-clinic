import * as React from 'react';
import {Navigate} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../../components/Layout/Layout';
import Swal from 'sweetalert2';

  const theme = createTheme();

export default function LogIn() {
  const[state,setState] = React.useState({
    email:"",
    password:""
  })
  Swal.fire({
    icon: 'error',
    title: 'Invalid Credentials',
    text: 'Please Enter correct email and password',
    // footer: '<a href="">Why do I have this issue?</a>'
  })
    const handleSubmit = (event) => {
      event.preventDefault();
      // const data = new FormData(event.currentTarget);
      const emailValid = event.target.email.value==="cvr"
      const passvalid = event.target.password.value==="cvr"
      if(emailValid && passvalid)
      {
        return (<Navigate to="/admin-front"/>)
      }
      
    };
  
    return (
      <Layout>
      <div className='home'>
      
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                
                sx={{ mt: 3, mb: 2 }}
              >
               Login In
             
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  
                </Grid>
              </Grid>
            </Box>
          </Box>
         
        </Container>
        </div>
        </Layout>
    
    );
  }

