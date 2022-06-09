import React from "react";
import Navbar from "./Navbar";
import AddOn from "./AddOns";
import Home from "./Home";


export default function App() {
  
  return (
      <div>
        
          <div className="above-navbar" >
            
            <span className="section-heading"> Home </span> 
            <AddOn />
            
          </div>
          <Navbar title="Home"/> 

           <Home /> 
 
      </div>
  );
}
