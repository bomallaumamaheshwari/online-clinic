import React,{Component} from 'react'
import PatientDetails from './PatientDetails'

import { Button,colors,Box, TableContainer, TableRow} from "@mui/material";
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
const admin_page =()=>{
   
    return(
        <Layout>
        <div style={{width:"250px",height:"750px"}}>
            <h1>Admin Page</h1>
            <div style={{direction:"flex"}}>
                <TableContainer>
           <TableRow><Button variant='contained' > <Link to="/patient-details">View patient Records</Link></Button></TableRow>
           <br></br>
           <TableRow><Button variant='contained'><Link to="/appointments-list">View appointments</Link></Button></TableRow>
           <br></br>
           <TableRow><Button variant='contained'> <Link to="/doctor-details">View Doctors</Link></Button></TableRow>
            {/* <Button variant='contained'><Link to="/doctors-delete">Delete Doctors</Link></Button> */}
            </TableContainer>
            </div>
        </div>
        </Layout>
    )
}

export default admin_page