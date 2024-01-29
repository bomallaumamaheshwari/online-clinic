import React from 'react'
import Layout from '../../components/Layout/Layout';
import Swal from 'sweetalert2';
export default function AttendAppointment() {
    
    
   
  return (
   
        <div className="Attend-appointment">
          <h2 className="meeting-header">Join Meeting</h2>
          <div className="meeting-container">
            <div>
              <label for="meetingid">Meeting Number</label>
              <input
                type="text"
                id="meetingid"
                placeholder="Meeting Number"
               // value={this.state.meetingNumber}
               // onChange={this.handleMeetingNumberChange.bind(this)}
              />
            </div>
            <div>
              <label for="passcode">Passcode</label>
              <input
                type="text"
                placeholder="Passcode"
              //  value={this.state.passCode}
                //onChange={this.handlePaascodeChange.bind(this)}
              />
            </div>
          </div>
          <div className="action-continer">
            <button
              className="join-meeting-button"
             // onClick={this.handleJoinButton}
            >
              Join Meeting
            </button>
          </div>
        </div>
      );
  
}
