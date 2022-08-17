import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Navbar from '../Navbar';

const index = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
};

export default index;