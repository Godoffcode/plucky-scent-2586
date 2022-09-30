import React from 'react'
import { Link } from 'react-router-dom'

const leftPortion={
height:"100%",
width:"30%",
// border:"1px solid black",
background:"#FFEECC"

}
const rightPortion={
    height:"100%",
    width:"70%",
    // border:"1px solid black",
    
    }




 function Login() {
  return (
    <div>


<div style={{height:"800px",width:"100%",display:"flex"}}>
<div style={leftPortion}>
    <div style={{height:"100px",width:"25%",marginTop:"10px"}}>
<Link to="/"><img src="https://dashboard.airgarage.com/static/media/AirGarage.919cc784.png" alt="" width="200px"/></Link>
    </div>
<div style={{height:"400px",width:"100%",margin:"auto",marginTop:"25%"}}>
    <img src="https://dashboard.airgarage.com/static/media/money_machine.b5d474b0.png" alt="" width="300px"/>
</div>
</div>
<div style={rightPortion}>
<div style={{height:"400px",width:"70%",margin:"auto",marginTop:"10%"}}>
<h3 style={{fontSize:"25px",fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>Log in to AirGarage</h3>
<h4>Or <h4 style={{color:"skyblue",fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>signup</h4></h4>
<label style={{fontSize:"15px",fontWeight:"bold"}}>Email or Phone no.</label><br/>
<input style={{height:"75px",width:"400px",border:"white",borderRadius:"2px",background:"lightGrey",fontSize:"20px",textAlign:"center",fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} type="text" placeholder='Email or Phone' /><br/><br/>

<button style={{color:"orange",background:"",height:"50px",width:"300px"}}>Get Verification Code</button>
</div>
</div>








</div>







    </div>
  )
}

export default Login;
