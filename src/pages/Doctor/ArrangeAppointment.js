
import Swal from 'sweetalert2';
import './doctor.css'
// import { ZoomMtg } from "@zoomus/websdk";
// import React, { useState } from "react";
// import Layout from "../../components/Layout/Layout";
// class ArrangeAppointment extends React.Component{

//   constructor(props)
//   {
//     super(props)
//     this.state = {
//       signature: "",
//       passCode: "",
//       meetingNumber: "",
//       apiKey: "",// enter API Key
//       apiSecret: "", // enter API Secret
//       userName: "UserName",
//       userEmail: "user@example.com",
//       role: "1", // 1 for host and 0 for participants.
//     };
//   }
//   initializeWebSDK(){
//     ZoomMtg.init({
//       leaveUrl: "http://localhost:3000/",
//       isSupportAV: true,
//       success: (success) => {
//         ZoomMtg.join({
//           signature: this.state.signature,
//           passWord: this.state.passCode,
//           meetingNumber: this.state.meetingNumber,
//           apiKey: this.state.apiKey,
//           userName: this.state.userName,
//           userEmail: this.state.userEmail,

//           success: (success) => {
//             console.log(success);
//           },
//           error: (error) => {
//             console.log(error);
//           },
//         });
//       },
//       error: (error) => {
//         console.log(error);
//       },
//     });
//   }
//   handleJoinButton(event) {
//     this.generateSignature().then(
//       (result) => {
//         // set signature value
//         this.setState({
//           signature: result,
//         });
//         // initialize zoom web SDK
//         ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.9/lib", "/av");
//         ZoomMtg.preLoadWasm();
//         ZoomMtg.prepareJssdk();

//         this.initializeWebSDK();

//         // display zoom container
//         document.getElementById("zmmtg-root").style.display = "block";
//       },
//       (error) => {
//         console.log("error");
//       }
//     );
//   };

import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { Height } from '@mui/icons-material';
function ArrangeAppointment() {
   const handleClick=()=>{
    Swal.fire({
        icon:'success',
        title:'appointment arranged'
    })
   }
    return(
        <Layout>
            <h2>Arrange an appointment</h2>
            <div style={{height:800}}>
      <div className="form" >
          <div className="form-body">
              
              <div className="app_num">
                  <label className="form__label" for="app_num">Appointment Number </label>
                  <input  type="app_num" id="app_num" className="form__input" placeholder="Appointment Number"/>
              </div>
              <div className="timings">
                  <label className="form__label" for="timings">Timings</label>
                  <input className="form__input" type="timings"  id="timings" placeholder="Timings"/>
              </div>
              
          </div>
          </div>
          <div class="footer">
              <button type="txt" class="btn" onClick={handleClick}>Arrange Appointment</button>
          </div>
      </div>      
      </Layout>
    )       
}
export default ArrangeAppointment;

//   generateSignature(event){
//     return new Promise((resolve, reject) => {
//       try {
//         const signature = ZoomMtg.generateSignature({
//           meetingNumber: this.state.meetingNumber,
//           apiKey: this.state.apiKey,
//           apiSecret: this.state.apiSecret,
//           role: this.state.role,
//         });
//         resolve(signature);
//       } catch (e) {
//         reject(Error("generate signature rejected"));
//       }
//     });
//   };

//   handleMeetingNumberChange (event) {
//     this.setState({meetingNumber: event.target.value});
//   }
//   handlePaascodeChange = (event) =>{
//     this.setState({passCode: event.target.value});
//   }
//   render(){
//     return (
//         <Layout>
//       <div className="ArrangeAppt">
//         <h2 className="meeting-header">Join Meeting</h2>
//         <div className="meeting-container">
//           <div>
//             <label for="meetingid">Meeting Number</label>
//             <input
//               type="text"
//               id="meetingid"
//               placeholder="Meeting Number"
//               value={this.state.meetingNumber}
//               onChange={this.handleMeetingNumberChange.bind(this)}
//             />
//           </div>
//           <div>
//             <label for="passcode">Passcode</label>
//             <input
//               type="text"
//               placeholder="Passcode"
//               value={this.state.passCode}
//               onChange={this.handlePaascodeChange.bind(this)}
//             />
//           </div>
//         </div>
//         <div className="action-continer">
//           <button
//             className="join-meeting-button"
//             onClick={this.handleJoinButton}
//           >
//             Join Meeting
//           </button>
//         </div>
//       </div>
//       </Layout>
//     );
//     }
// }

// export default ArrangeAppointment;