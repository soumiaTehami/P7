import React from "react";
//import Card from "../components/Post/Card"
import Log from "../components/Log";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="home-header">
          <Navbar />
          <div className="home-header">
            <Log signin={false} signup={true} />
          
            <img src="./img/icon-left-font.svg" alt="img-log" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
