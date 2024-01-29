import React from "react"
import Layout from "../../components/Layout/Layout"
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
export default function AttendAppointments()
{
    return(
        <Layout>
            <div style={{height:750}}>
            <h2>Patient's pending appointments</h2>
            <TableContainer >
            <Table>
               
                <TableRow>
                    <TableCell>Appointment Number</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Reason for appointment:</TableCell>
                   <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Dr.Venu</TableCell>
                    <TableCell>Sleeping isuues</TableCell>
                    <TableCell><Button fullWidth >Attend Appointment</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Dr.Shyam</TableCell>
                    <TableCell>High Fever</TableCell>
                    <TableCell><Button fullWidth >Attend Appointment</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Dr.Neha</TableCell>
                    <TableCell>Allergic Reaction</TableCell>
                    <TableCell><Button fullWidth >Attend Appointment</Button></TableCell>
                </TableRow>
            </Table>
        </TableContainer>
        </div>
        </Layout>
    );
}