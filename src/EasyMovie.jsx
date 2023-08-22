import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import Home from "./Paginas/Home";
import Categorias from "./Paginas/Categorias";
import VistaCategoria from "./Paginas/VistaCategoria";
import Configuracion from "./Paginas/Configuracion";
import Detalles from "./Paginas/Detalles";
import Footer from "./Componentes/Footer";
import Favoritos from "./Paginas/Favoritos";
import axios from 'axios';

function EasyMovie() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/api/peliculas");
        setPeliculas(response.data.response.peliculas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar peliculas={peliculas}/>
      <Routes>
        <Route path="*" element={<Home peliculas={peliculas} />} />
        <Route path="/Home" element={<Home peliculas={peliculas} />} />
        <Route path="/Categorias" element={<Categorias peliculas={peliculas} />} />
        <Route path="/VistaCategoria/:categoria" element={<VistaCategoria peliculas={peliculas}/>}></Route>
        <Route path="/Configuracion" element={<Configuracion />} />
        <Route path="/Detalles/:id" element={<Detalles peliculas={peliculas} />} />
        <Route path="/Favoritos" element={<Favoritos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default EasyMovie;

