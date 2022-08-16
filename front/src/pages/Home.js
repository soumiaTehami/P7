import React from "react";
import Log from "../components/Log";

const Home = () => {
  

  return (
    <div className="home-header">
          <Log signin={false} signup={true} />
          <img src="./img/icon-left-font.svg" alt="img-log" />
        </div>
  );
};

export default Home;
