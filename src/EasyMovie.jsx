import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import Home from "./Paginas/Home";
import Categorias from "./Paginas/Categorias";
import Configuracion from "./Paginas/Configuracion";
import Detalles from "./Paginas/Detalles";
import Footer from "./Componentes/Footer";
import Favoritos from "./Paginas/Favoritos";

function EasyMovie() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Categorias" element={<Categorias />}></Route>
        <Route path="/Configuracion" element={<Configuracion />}></Route>
        <Route path="/Detalles" element={<Detalles />}></Route>
        <Route path="/Favoritos" element={<Favoritos />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default EasyMovie;
