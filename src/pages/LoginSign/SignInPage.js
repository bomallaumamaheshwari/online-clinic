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
const database = 
[
  {
    email:"avinash@gmail.com",
    password:"avi123"    
  },
  {
    email:"aarti08@gmail.com",
    password:"@RTi"
  },
  {
    email:"jasonmomo@gmail.com",
    password:"json"
  }
]
export default function SignIn() {
  const[email,setEmail] = React.useState(null)
  const[password,setPassword]= React.useState(null)
 
 
    const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log(event.target.email.value)
      var flag = false
      for(let i = 0;i<database.length;i++)
      {
        if(database[i].email===event.target.email.value && database[i].password===event.target.password.value)
        {
          flag = true
          
        }
      }
      if(flag===false)
      {
        
        
        // return (<Navigate href = "/patient-front"></Navigate>)
      }
      else
      {
        const e = event.target.email.value==="cvr"
        const p = event.target.password.value==="cvr"
        if(e && p)
        {
          
          console.log('All correct')
         
          return (<Navigate href="/admin-front"></Navigate>)
        }
      }
   
     
     
     
    };
    const handleInputChange = (e)=>{
      const{id,value} = e.target
      if(id==="email")
      {
        setEmail(value)
      }
      if(id==="password")
      {
        setPassword(value)
      }
    }
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
              Sign in
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
                value ={email}
                onChange = {(e)=>handleInputChange(e)}
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
                value = {password}
                onChange = {(e)=>handleInputChange(e)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button 
              
               
               fullWidth
               sx={{ mt: 3, mb: 2 }}
               variant='contained'>

              
               Sign In
             
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  {/* <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}
                  <Link href='/contact'>
                    {"Click here for contact"}
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
