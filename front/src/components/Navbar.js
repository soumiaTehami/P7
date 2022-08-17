import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink  to="/">
            <img src="./img/icon-navbar.PNG" alt="icon" />
          </NavLink>
        </div>
        
          <ul>
            <li>
              <NavLink to='/'  >
                <img src="./img/icons/home.svg" alt="home"/>
              </NavLink>
            </li>
          
          
          </ul>
       
      
      </div>
    </nav>
  );
};

export default Navbar;