import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';
import '../Styles/Busqueda.css'
import Tarjetas from "../Componentes/Tarjetas";

function Busqueda({ peliculas }) {
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
            <div className="busqueda">
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    value={filter.search} 
                    onChange={handleSearchChange} 
                />
                <FaSearch style={{ marginLeft: '15px', marginTop: '5px', fontSize:'25px' }} />
            </div>

            <div className="contenedorTarjetas">
                {peliculasFiltradas.map(pelicula => (
                    <Tarjetas key={pelicula.id} pelicula={pelicula} />
                ))}
            </div>
        </>
    );
}

export default Busqueda