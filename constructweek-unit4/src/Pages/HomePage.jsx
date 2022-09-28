import React from "react";

const Parentstyle={
    height:"100p%", 
    width:"100%",
    border:"1px solid black",
    
  }
  const Innerparent={
    height:"100%px", 
    width:"82%",
    // border:"1px solid black",
    margintop:"10px",
    margin:"auto",
  
  
  }
  const navbar={
    height:"100px",
    width:"100%",
//   border:"1px solid red",
  display:"flex",
 
  
  
  }
  const picture1={
    height:"250px",
    width:"40%",
//   border:"1px solid blue",
  margin:"auto",
  marginTop:"15px"
  }
  const text1={
    height:"50px",
    width:"60%",
//   border:"1px solid black",
  margin:"auto",
  marginTop:"20px"

  }
  const text2={
    height:"75px",
    width:"90%",
//   border:"1px solid black",
  margin:"auto",
  marginTop:"10px"
  }
  const buttons={
    height:"55px",
    width:"40%",
    // border:"1px solid brown",
    margin:"auto",
    display:"flex",
    margintop:"10px",
  }
  const inbutton1={
    height:"100%",
    width:"50%",
    // border:"1px solid pink",
  }
  const inbutton2={
    height:"100%",
    width:"50%",
    // border:"1px solid pink",
  }
  const picPara={
    height:"400px",
    width:"100%",
    // border:"1px solid black",
    display:"flex",
    
  }
  const picPara1={
    height:"70%",
    width:"50%",
    // border:"1px solid black",
    margin:"auto",
  }
  const picPara2={
    height:"70%",
    width:"50%",
    // border:"1px solid black",
    margin:"auto",
  }
  const heading={
    height:"50px",
    width:"100%",
    // border:"1px solid brown"
  }
  const headtext={
    height:"70px",
    width:"100%",
    // border:"1px solid brown"
  }
  const Puriimg={
    height:"500px",
    width:"100%",
    // border:"1px solid black"
  }
  const heading2={
    height:"70px",
    width:"60%",
    margin:"auto",
    // border:"1px solid black"
  }
  const haedtext2={
    height:"50px",
    width:"100%",
    // border:"1px solid black",
  }
  const threeboxParent={
    height:"350px",
    width:"100%",
//   border:"1px solid pink",
  display:"flex"
  }
  const three1={
    height:"100%",
    width:"30%",
    // border:"1px solid red",
    boxShadow:"box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
    // margin:"auto"
  }
  const three2={
    height:"100%",
    width:"30%",
    // border:"1px solid red",
    boxShadow:"box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
    margin:"auto"
  }
  const three3={
    height:"100%",
    width:"30%",
    // border:"1px solid red",
    boxShadow:"box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
  
  }
  const boxhead={
    height:"100px",
    width:"100%",
    // border:"1px solid red",
  }
  const dobox={
    height:"550px",
    width:"100%",
    // border:"1px solid red",
    display:"flex",
    margin:"auto"
  }
  const box1={
    height:"100%",
    width:"48%",
    // border:"1px solid black",
    margin:"auto"

  }
  const box2={
    height:"100%",
    width:"48%",
    // border:"1px solid black",
    margin:"auto"
    
  }
const Footer={
height:"500px",
width:"100%",
border:"1px solid red",
}
const puripicture2={
    height:"500px",
    width:"100%",
    marginTop:"10px"
}
  
  













function  HomePage(){
return(
<>
    
    <div style={Parentstyle}>
    <div style={Innerparent}>
        {/* navbar */}
        {/* logo box */}
    <div style={navbar}>
<div style={{height:"100%",width:"250px",margin:"auto" }}>
   <div style={{height:"50px",width:"200px",marginTop:"20px"}}> <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" alt="Logo" height="50px" width="200px" display="flex" marginTop="10px"/>
   </div></div>
   {/* spacing */}
<div style={{height:"100%",width:"400px",margin:"auto"}}></div>
{/* find parking */}
<div style={{height:"100%",width:"150px",margin:"auto"}}>
    <h4 style={{marginTop:"26px"}}>Find parking</h4>
</div>
<div style={{height:"100%",width:"120px",margin:"auto"}}>
    <h4 style={{marginTop:"26px"}}>Login</h4>
</div>
<div style={{height:"100%",width:"150px",margin:"auto"}}>
    <button style={{fontFamily:" Arial,sans-serif",marginTop:"20px",height:"50px",width:"150px",borderRadius:"20px"}}>Contact Customer Support</button>
</div>
<div style={{height:"100%",width:"150px",margin:"auto"}}>
    <button style={{fontFamily:" Arial,sans-serif",marginTop:"20px",height:"50px",width:"150px",borderRadius:"20px",color:"white",background:"black"}}>Talk to sales</button>
</div>

    </div>
    <div style={picture1}>
        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png" alt="Airgarage" width="250px" />
    </div>
    <div style={text1}>
        <h1 style={{fontFamily:" Arial,sans-serif",fontSize:"30px"}}>Parking Operations for the 21st Century
</h1>
    </div>
    <div style={text2}>
        <p style={{color:"grey"}}>AirGarage modernizes parking assets with one streamlined service covering enforcement, payment collection, maintenance and more.</p>
    </div>
    <div style={buttons}>
      <div  style={inbutton1}>
        <button style={{fontFamily:" Arial,sans-serif",height:"50px",width:"245px",borderRadius:"20px"}}>Contact Customer Support</button>
      </div>
      <div style={inbutton2}>
        <button style={{fontFamily:" Arial,sans-serif",height:"50px",width:"245px",borderRadius:"20px",color:"white",background:"black"}}>Talk to Sales</button>
      </div>
    </div>
    <div style={picPara}>
      <div style={picPara1}>
        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eac05575f75fbd765956a9_garage-1-a-p-500.png" alt="BuildingPic" width="300px" />
      </div>
      <div style={picPara2}>
        <h2>Partner with AirGarage</h2>
        <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>AirGarage is a full service parking operator. We handle all of the day-to-day logistics that go into making your parking lot or garage the most successful version of itself.

We operate hundreds of parking lots and garages across the United States and Canada on behalf of landlords, property managers, and other real estate operators. Our focus is using technology to lower operational overhead and increase your net parking income.</p>
<p style={{fontWeight:"bold",fontFamily:" Arial,sans-serif"}}>We're already maximizing returns for top-tier real estate owners:</p>
      </div>
    </div>
    <div style={heading}>
        <h2 style={{marginRight:"73%",fontFamily:" Arial,sans-serif"}}>Increase Your Net Revenue</h2>
    </div>
    <div style={headtext}>
        <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>Our proprietary technology enables us to offer lower operating costs to our partners meaning they take home up to 50% more every month than when they worked with our competition.

</p>
    </div>
    <div style={Puriimg}>
        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/619bf3a972f16c08c2a24729_stack-ag-p-1600.png" alt="puripicture" width="80%" />
    </div>
    <div style={heading2}>
        <h2 style={{fontFamily:" Arial,sans-serif"}}>Our value proposition</h2>
    </div>
    <div style={haedtext2}>
        <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>We've built the operating system for parking management, infusing technology into every facet of the business.</p>
    </div>
    <div  style={threeboxParent}>
      <div style={three1}>
        <div style={{marginRight:"70%",marginTop:"20px"}}><img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png" alt="umbrela" height="60px"/></div>
      <h3>Best-in-class Economics</h3>
      <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>Increase Net Operating Income at your property by up to 50% vs other parking operators.</p>
      
      </div>
      <div style={three2}>
      <div style={{marginRight:"70%",marginTop:"20px"}}><img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png" alt="umbrela" height="60px"/></div>
      <h3 style={{fontFamily:" Arial,sans-serif"}}>You're in Control</h3>
      <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>Need to reserve spaces for customers or validate employee vehicles? Our system was built with multi-use cases in mind.</p>
      
      </div>
      <div style={three3}>
      <div style={{marginRight:"70%",marginTop:"20px"}}><img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png" alt="umbrela" height="60px"/></div>
     <h3 style={{fontFamily:" Arial,sans-serif"}}>Always On Enforcement</h3>
     <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>AirGarage's proprietary network of enforcement officers scans day and night so you don't have to stress about violators.</p>
     
     
      </div>
    </div>
    <div style={boxhead}>
        <h2>Get a better deal today</h2>
        <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>Send us your parking management contract and get a counter offer in 24 hours</p>
    </div>
    <div style={dobox}>
        <div style={box1}>
            <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad7c7bc5cb09481db5a7b3_Image%20from%20iOS%20(4)-p-500.jpeg" alt="Public Parking" width="100%" height="350px"/>
       <h2 style={{fontFamily:" Arial,sans-serif"}}>Increase Parking Revenue</h2>
       <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>Other parking operators nickel and dime owners by passing through every cost of their operation from uniforms to phone bills. AirGarage operates on a revenue share model so that we only make money if you do.</p>
        </div>
        <div  style={box2}>
            <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad7c7bb4dc18e48c224f8e_Image%20from%20iOS%20(5)-p-500.jpeg" alt="multifacted enforcement" width="100%" height="350px"/>
       <h2 style={{fontFamily:" Arial,sans-serif"}}>Multifaceted Enforcement</h2>
       <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>The combined power of AirGarage's network of enforcement officers and our Automatic License Plate Recognition cameras means no illegally parked vehicle will slip through the cracks unnoticed.</p>
        </div>
    </div>
    <div style={boxhead}>
        <h2 style={{fontFamily:"sans-serif"}}>Transparent and Data Driven</h2>
        <p style={{color:"grey",fontFamily:"sans-serif"}}>We share all of our data with you in real time, so you’re always aware what’s happening on your property.

</p>
    </div>
    <div  style={threeboxParent}>
    <div style={three1}>
    <div style={{marginRight:"70%",marginTop:"20px"}}><img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207311fbe70d9afcad50_bar.png" alt="umbrela" height="60px"/></div>
      <h3>Reporting & Analytics</h3>
      <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>Forecast occupancy and maximize your revenue with transparent data.</p>
      
    </div>
      <div style={three2}>
      <div style={{marginRight:"70%",marginTop:"20px"}}><img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207363f6b974468c3cab_pie.png" alt="umbrela" height="60px"/></div>
      <h3 style={{fontFamily:" Arial,sans-serif"}}>Historical trends</h3>
      <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>View your property's performance over time and track its progress.</p>
      
      </div>
      <div style={three3}>
      <div style={{marginRight:"70%",marginTop:"20px"}}><img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac20734d588b250051fd79_fast.png" alt="umbrela" height="60px"/></div>
     <h3 style={{fontFamily:" Arial,sans-serif"}}>Real-time updates
</h3>
     <p style={{color:"grey",fontFamily:" Arial,sans-serif"}}>Your dashboard updates with each parking rental as it happens. No more waiting for end of month reports.</p>
     
     
      </div>
    </div>
    <div style={puripicture2}>
        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad548421171b59d3dec8b7_dash.png" alt="" width="100%" height="100%"/>

    </div>
    <div style={boxhead}></div>
   


   
   
   
   
   
   
   
   
   </div>
   <div style={Footer}></div>
    </div>

   




    </>
 
)
};
export default HomePage;