import React from "react";
import { Route,Routes } from "react-router-dom";
import FindParking from "./FindParking";
import HomePage from "./HomePage";
import Login from "./Login";



function Allroutes(){
    return (
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route   path="/login" element={<Login />} />

<Route path="/findparking" element={<FindParking/>}/>


</Routes>



    )
}

export default Allroutes;
