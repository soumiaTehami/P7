import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';


const index = () => {
  return (
    <div>
      
      <Router>
        <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        </Switch>
      </Router>
    </div>
  );
};

export default index;