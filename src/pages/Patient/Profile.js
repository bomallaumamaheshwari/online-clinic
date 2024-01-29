import React from 'react'
import { Link } from 'react-router-dom'
import { Button,TableContainer,TableRow } from '@mui/material'
import Layout from '../../components/Layout/Layout'

export default function Profile() {
  return (
    <Layout>
    <div style={{height:"750px"}}>
    <h1>Patient Page</h1>
    <TableContainer>
   <TableRow><Button variant='contained'> <Link to="/attend-appointments">View upcoming appointments</Link></Button></TableRow>
   <br></br>
   <TableRow><Button variant='contained'><Link to="/appointments">Book appointments</Link></Button></TableRow>
   <br></br>
   <TableRow><Button variant='contained'> <Link href="/attend-appointment">Attend Appointment</Link></Button></TableRow>
   <br></br>
   <TableRow> <Button variant='contained'><Link to="/patient-cancel-appointment">Cancel Appointment</Link></Button></TableRow>
    </TableContainer>
</div>
</Layout>
  )
}
