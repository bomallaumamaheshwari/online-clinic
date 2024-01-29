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
import database from "../../db-model/database";
export default function PatientDetails() {
  return (
    <Layout>
        <div style={{height:"750px"}}>
            <h2>Patient Details</h2>
        <TableContainer>
            <Table>
              
                <TableRow>
                    <TableCell>Patient Id</TableCell>
                    <TableCell>Patient name</TableCell>
                    <TableCell>Number of previous appointments</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Himanshu</TableCell>
                    <TableCell>3</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Rithika</TableCell>
                    <TableCell>0</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Jhanavi</TableCell>
                    <TableCell>5</TableCell>
                </TableRow>
            </Table>
        </TableContainer>
        </div>
    </Layout>
  )
}
