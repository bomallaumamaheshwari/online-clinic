import React from "react";
import Layout from "../../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function DoctorDetails() {
  return (
    <Layout>
        <div style={{height:"750px"}}>
            <h2>Doctor details</h2>
        <TableContainer>
            <Table>
                
                <TableRow>
                    <TableCell>Doctor Id</TableCell>
                    <TableCell>Doctor name</TableCell>
                    <TableCell>Number of appointments conducted</TableCell>
                    <TableCell>Specialization</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>A1</TableCell>
                    <TableCell>Venu</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>A2</TableCell>
                    <TableCell>Neha</TableCell>
                    <TableCell>0</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>A3</TableCell>
                    <TableCell>Shyam</TableCell>
                    <TableCell>5</TableCell>
                </TableRow>
            </Table>
        </TableContainer>
        </div>
    </Layout>
  )
}
