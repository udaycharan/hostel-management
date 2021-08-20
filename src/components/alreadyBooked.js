import React from "react";

function AlreadyBooked(props){

    return <div className = "booked-msg">
        <h2>Welcome {props.name}</h2>
        <small>You have already booked a room.</small><br/>
        <strong>Your room details are as follows:</strong>
        <br/>
        <div className="booking-details">
        <ul>
            <li>Hostel No.</li>
            <li>Room No.</li>
        </ul>
        </div>

    </div>

}

export default AlreadyBooked;