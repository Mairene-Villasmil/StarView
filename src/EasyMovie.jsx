import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import Home from "./Paginas/Home";

function EasyMovie() {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default EasyMovie;
