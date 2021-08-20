import React from "react";
import verifyAccount from "../auth";
import { Component} from "react";
import  {googleSignin, facebookSignin} from "../methods";



 class Signin extends Component{

    constructor(props){
        super(props);

        this.state = {isBooked: false}

    }

   handleClick= async (provider)=>{

        const res = await verifyAccount(provider);
        return res;

        // this.setState({isBooked: true});
    }





    render(){ 
    return (
        <>
    <h5>Hostel Allocation</h5>
    <p>Please sign-in:</p>
    <button id ="btn-google" onClick={()=>{this.handleClick(googleSignin)}} ><span><i class="fa fa-google" aria-hidden="true"></i></span> Sign in with Google</button>
    <button id ="btn-facebook" onClick={()=>{this.handleClick(facebookSignin)}}><span><i class="fa fa-facebook-official" aria-hidden="true"></i></span> Sign in with Facebook</button>
    
    </>
    );
    }
}

export default Signin;