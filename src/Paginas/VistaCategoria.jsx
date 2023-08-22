import React from "react";
import { useParams } from 'react-router-dom';
import Tarjetas from "../Componentes/Tarjetas";
import MenuLateral from '../Componentes/MenuLateral'
import '../Styles/VistaCategorias.css'

function VistaCategoria({ peliculas }) {
    console.log(peliculas)
    const { categoria } = useParams();

    const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.categoria === categoria
    );
    console.log(peliculasFiltradas)

    return (
        <>
            <MenuLateral />
            <div className="contenedorVista">
                <span>Categoría {categoria}</span>
                {
                    peliculasFiltradas.length > 0 ? (
                        <div className="tarjetasCategoria">
                            {peliculasFiltradas.map(pelicula => (
                                <Tarjetas key={pelicula.categoria} pelicula={pelicula} />
                            ))}
                        </div>
                    ) : (
                        <h1>No se encontraron coincidencias</h1>
                    )
                }
            </div>

        </>
    );
}

export default VistaCategoria