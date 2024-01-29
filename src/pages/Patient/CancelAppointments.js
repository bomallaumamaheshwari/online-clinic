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
    app_num:"1",
    email:"avinash@gmail.com",
    reason:"Sleep issues"    
  },
  {
    app_num:"2",
    email:"aarti08@gmail.com",
    reason:"Aligner appointment"
  },
  {
    app_num:"3",
    email:"jasonmomo@gmail.com",
    reason:"Heart issue"
  }
]
export default function CancelAppointments() {
  const[email,setEmail] = React.useState(null)
  const[app_num,setAppNum] = React.useState(null)
  const[reason,setReason] = React.useState(null)
    const handleSubmit = (event) => {
      event.preventDefault();
      
     
      var flag = false
      if(database.find(app_num,email,reason))
      {
        flag = true
      }
      if(flag===false)
      {
        alert('Invalid Appointment Details')
        
      }
      else
      {
        return (<Navigate href = "/patient-front"></Navigate>)
         
        
      }
   
     
     
     
    };
    const handleInputChange = (e)=>{
      const{id,value} = e.target
      if(id==="app_num")
      {
        setAppNum(value)
      }
      if(id==="email")
      {
        setEmail(value)
      }

      if(id==="reason")
      {
        setReason(value)
      }
      
    }

    const handleClick=(e)=>{
      Swal.fire({
        title: 'Are you sure you want to cancel?',
        showDenyButton:true,
      
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('The appointment has been cancelled', '', 'success')
        } 
      })
    }
    return (
      <Layout>
      <div className='home' style={{height:800}}>
      
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
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon /> */}
            
            <Typography component="h1" variant="h5">
              Cancel Appointment
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="app_num"
                label="Appointment Number"
                name="app_num"
                autoComplete="app_num"
                autoFocus
                value ={app_num}
                onChange = {(e)=>handleInputChange(e)}
              />
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
                id="reason"
                label="Reason"
                name="reason"
                autoComplete="reason"
                autoFocus
                value ={reason}
                onChange = {(e)=>handleInputChange(e)}
              />
              
             
             <Button variant='contained' fullWidth onClick={handleClick}>
              Cancel Appointment
             </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                
                </Grid>
              </Grid>
            </Box>
          </Box>
         
        </Container>
        </div>
        </Layout>
    
    );
  }





