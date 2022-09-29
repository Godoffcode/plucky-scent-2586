import React from "react";
import {Link} from "react-router-dom"

const Parent={
    height:"100%",
    width:"100%",
    // border:"1px solid black"
}
const Logo={
    height:"100px",
    width:"20%",
    // border:"1px solid black"

}
const innnerParent={
    height:"100%",
    width:"80%",
    // border:"1px solid brown",
    margin:"auto"
}
const HeadTExt={
    height:"100px",
    width:"30%",
    // border:"1px solid black",
    margin:"auto",
}
const inputboxes={
    height:"150px",
    width:"100%",
    // border:"1px solid black",
    margin:"auto",
    display:"flex"


}
const fourbox={
    height:"300px",
    width:"100%",
    // border:"1px solid black",
    display:"flex"
}
const Footer={
    height:"75px",
    width:"100%",
    // border:"1px solid black",
    background:"#fa824c"
}


function FindParking(){
return (
<div style={Parent}>
    <div style={Logo}>
        <Link to="/"><img src="https://render-webpay.airgarage.com/static/media/AirGarage.919cc784.png" alt="Logo" width="250px" style={{marginTop:"10px"}} /></Link>
    </div>
    <div style={innnerParent}>
    <div style={HeadTExt}>
        <h2 style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>Find parking</h2>
        <p style={{color:"grey"}}>100s of spots available near you.</p>
    </div>
    <div style={inputboxes}>
        <div style={{height:"100%",width:"60%"}}>
        <label style={{fontSize:"30px",marginRight:"60%",fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>LOCATION</label><br></br>
            <input type="text" placeholder="Enter an address" style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",height:"60px",width:"80%",borderRadius:"5px",fontSize:"50px",textAlign:"center",background:"lightGrey",borderColor:"white"}} />
        
        </div>
        <div style={{height:"100%",width:"20%"}}>
        <label style={{fontSize:"30px",marginRight:"55%",fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>TYPE</label><br></br>
        <select style={{height:"60px",width:"80%",borderRadius:"5px",fontSize:"30px",textAlign:"center",color:"grey",borderColor:"white",fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>
            <option style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>Hourly</option>
            <option style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>Monthly</option>
            <option style={{fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>Airport</option>
            
        </select>



        </div>
        <div style={{height:"100%",width:"20%"}}>
            <button style={{fontSize:"30px",width:"75%",marginTop:"20%",color:"#fa824c",backgroundColor:"lightYellow",border:"0px",fontFamily:"Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}>Search</button>
        </div>
    </div>
    <div style={{height:"50px"}}>
        <h3 style={{}}>Popular Searches</h3>
    </div>
    <div style={fourbox}>
        
        <div style={{height:"100%",width:"23%",marginTop:"auto",margin:"auto"}}>
<img src="https://render-webpay.airgarage.com/static/media/hollywood.3cda80f5.png" alt="" width="280px" height="300px"/>

        </div>
        <div style={{height:"100%",width:"23%",marginTop:"auto",margin:"auto"}}>
        <img src="https://render-webpay.airgarage.com/static/media/omaha.47180892.png" alt="" width="280px" height="300px"/>

            
            
            </div>      
<div style={{height:"100%",width:"23%",marginTop:"auto",margin:"auto"}}>
<img src="https://render-webpay.airgarage.com/static/media/a2.29e68f98.png" alt="" width="280px" height="300px"/>

    
    
    
    </div>      
        <div style={{height:"100%",width:"23%",marginTop:"auto",margin:"auto"}}>
        <img src="https://render-webpay.airgarage.com/static/media/cacti.0300cb19.png" alt="" width="280px" height="300px"/>

            
            
            
            </div>      




    </div>
    
    



  <div style={{height:"100px",width:"100%",textAlign:"center",display:"flex"}}>
    <div style={{height:"100%",width:"25%"}}>
        <h3>Los angeles</h3>
        <p style={{color:"grey"}}>15 Sports Available</p>
    </div>
    <div style={{height:"100%",width:"25%"}}>
        <h3> Omaha</h3>
        <p style={{color:"grey"}}>14 Sports Available</p>
    </div>
    <div style={{height:"100%",width:"25%"}}>
        <h3>Ann Arbor</h3>
        <p style={{color:"grey"}}>12 Sports Available</p>
    </div>

    <div style={{height:"100%",width:"25%"}}>
        <h3>Tempe</h3>
        <p style={{color:"grey"}}>21 Sports Available</p>
    </div>



  </div>
    </div>

    <div style={Footer}>
<p style={{textAlign:"center",color:"white",fontSize:"15px"}}>©2021 AirGarage, Inc</p>
    </div>

</div>



)

}
export default FindParking
