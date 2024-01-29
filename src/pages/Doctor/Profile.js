import React from 'react'
import { Button } from '@mui/material'
import { colors,Box, TableContainer, TableRow} from "@mui/material";
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
export default function Profile() {
  return (
    <Layout>
    <div style={{height:"750px"}}>
    <h1>Doctor Page</h1>
    <TableContainer>
           <TableRow><Button variant='contained' > <Link to="/patient-details">Arrange an Appointment</Link></Button></TableRow>
           <br></br>
           <TableRow><Button variant='contained'><Link to="/appointments-list">Post Diagnosis for appointment</Link></Button></TableRow>
           <br></br>
        
            {/* <Button variant='contained'><Link to="/doctors-delete">Delete Doctors</Link></Button> */}
            </TableContainer>
   {/* <Button > <Link to="*">View pending appointments</Link></Button>
   <Button ><Link to="*">View completed appointments</Link></Button>
   <Button > <Link to="*">Attend appointment</Link></Button> */}
   
</div>
</Layout>
  )
}
