import React from "react";
import '../Styles/TarjetasCategorias.css'
import { Link as LinkRouter } from 'react-router-dom'

function TarjetasCategorias({ peliculas, onCategoriaClick }) {
    const categorias = [
        "Superheroes", "Accion", "Cortos", "Musicales", "Suspenso",
        "Comedia", "Documentales", "Drama", "Romance", "Infantil",
        "Live Action", "Aventura"
    ];

    return (
        <>
            <div className="contenedorTarjetas">
                {categorias.map(categoria => (
                    <LinkRouter key={categoria} to={`/VistaCategoria/${categoria}`}>
                        <span className="TarjetaCategoria">
                            <p>
                                {categoria}
                            </p>
                        </span>
                    </LinkRouter>
                ))}
            </div>
        </>
    );
}
export default TarjetasCategorias