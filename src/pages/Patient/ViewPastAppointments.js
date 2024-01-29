import React from "react";
import Layout from "../../components/Layout/Layout";
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
export default function ViewPastAppointments()
{
    return(
    <Layout>
<div style={{height:750}}>
            <h2>Patient's past appointments</h2>
            <TableContainer >
            <Table>
               
                <TableRow>
                    <TableCell>Appointment Number</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Reason for appointment:</TableCell>
                    <TableCell>Diagnosis</TableCell>
                   <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Dr.Venu</TableCell>
                    <TableCell>Continuous coughing</TableCell>
                    <TableCell>Whooping Cough</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Dr.Shyam</TableCell>
                    <TableCell>Severe Headache</TableCell>
                    <TableCell>Drug induced Migraine</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Dr.Neha</TableCell>
                    <TableCell>Swelling of face and indigestion</TableCell>
                    <TableCell>Allergic reaction to fish</TableCell>
                </TableRow>
            </Table>
        </TableContainer>
        </div>
    </Layout>
    );
}