import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";

import Home from "./pages/Home";
import Profil from "./pages/Profil";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
