import React from "react";
import Log from "../components/Log";
import Navbar from "../components/Navbar";



const Profil = () => {
  return (
    <div className="profil-page">
     
        <div className="log-container">
        <Navbar />
          <Log/>
          <img src="./img/icon-left-font.svg" alt="img-log" />
          </div>
      
    </div>
  );
};

export default Profil;
