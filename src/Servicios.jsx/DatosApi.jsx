import React, { useState } from "react";
import Busqueda from "./Busqueda";

function DatosApi({ peliculas }) {
    const [filter, setFilter] = useState({ search: '' });

    const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.nombre.toLowerCase().includes(filter.search.toLowerCase())
    );

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setFilter({ search: searchTerm });
    };

    return (
        <>
            {
                peliculasFiltradas.length > 0 ? (
                     <Busqueda peliculas={peliculasFiltradas} />
                ) : (
                    <h1>Cargando...</h1>
                )
            }
        </>
    );
}

export default DatosApi