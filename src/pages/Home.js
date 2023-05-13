import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { colors } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Clinic Website</h1>
          <p>Best services</p>
          <Link to="/menu">
            <button>Book Appoinment</button>
          </Link>
        </div>
      </div>
      <div className="div" align="center">
        <h1>Doctors Panel</h1>
        <div className="img1"></div>
        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="200" height="200"/>
        <h2>Dr.Venu</h2>
        <div className="img2"></div>
        <img src="https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?b=1&s=170667a&w=0&k=20&c=fNdTEAw5B_gj38mP4lxfj_PMALGz_scFnmcUrOMQ8kg=" width="200" height="200"/>
        <div className="img3"></div>
        <h2>Dr.Neha</h2>
        <img src="https://media.istockphoto.com/id/1455610161/photo/portrait-of-a-senior-black-doctor-looking-at-the-camera.jpg?b=1&s=170667a&w=0&k=20&c=Rx_K2yJm4kZaizKkJsy75ii3gV7pr_Pl3u787Z9k1QM=" width="200" height="200"/> 
        <h2>Dr.Shyam</h2>
      </div>
      <div align="center"> 
        <h1>DO I NEED TO VISIT PERSONALLY FOR THE TREATMENT?</h1>
        <img src="https://img.freepik.com/premium-vector/personal-doctor-appointment-2d-vector-isolated-illustration-visit-professional-health-facility-flat-characters-cartoon-background-getting-treatment-plan-symptoms-conditions-colourful-scene_151150-5797.jpg?w=360"/>
        <h3 align="center">NO, this is not compulsory to visit personally for the treatment,we are providing a<br/>
          online consultation facility, so if you don’t want to/can’t come personally due to <br/>
          any reason then you can have the online consultation and treatment and can <br/>
          enjoy you sex life after and with the treatment. But make sure to give us your <br/>
      progressive report with in the 60days after starting the treatment.</h3>
      </div>
        </Layout>
    
  );
};

export default Home;