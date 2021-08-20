import React from "react";
import Signin from "./Signin";
import AlreadyBooked from "./alreadyBooked";
import {useState} from "react";





export default function App() {

  const [alreadyBooked, setSate] = useState(false);

  return (
    <div className = "signin-box">  
      {alreadyBooked ? <AlreadyBooked  name  = {"Uday"} /> : <Signin alreadyBooked = {alreadyBooked}/> }  
    </div>
  );
}

