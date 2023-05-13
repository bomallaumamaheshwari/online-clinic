import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Clinic</Typography>
        <p>
        clinic, an organized medical service offering diagnostic, 
        therapeutic, or preventive outpatient services. Often, the 
        term covers an entire medical teaching centre, including the 
        hospital and the outpatient facilities. The medical care offered 
        by a clinic may or may not be connected with a hospital.The organization
         of a hospital clinic in general follows that of the inpatient facilities. 
         Hospital clinics are primarily concerned with acute diseases, and the 
         physicians in the clinics are usually the same physicians who treat 
         inpatients in the hospital.A clinic can be a facility where a group of
          physicians in various specialities work to provide a range of healthcare 
          services to walk-in patients, in addition to patients with scheduled 
          appointments.
        </p>
       <div align="center">
          <h1>Our Services</h1>
          Dental<br/>
          Dermatology<br/>
          ENT<br/>
          Nutrician<br/>
          Pediatric<br/>
          physicaltherapy
        </div>
        
      </Box>
    </Layout>
  );
};

export default About;