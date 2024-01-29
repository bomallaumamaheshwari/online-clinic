import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
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


import Swal from 'sweetalert2';

export default function PostDiagnosis() {
    const handleClick = (e)=>{
        Swal.fire({
            icon:'success',
            title:'Diagnosis posted'
        })
    }
    return(
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
          
            <Typography component="h1" variant="h5">
            Post Diagnosis
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="appointment-number"
                label="Appointment Number"
                name="app_num"
                autoComplete="app_num"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="diagnosis"
                label="Diagnosis"
                name="diagnosis"
                autoComplete="diagnosis"
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleClick}
                sx={{ mt: 3, mb: 2 }}
              >
              Post Diagnosis
             
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
    )       
}
