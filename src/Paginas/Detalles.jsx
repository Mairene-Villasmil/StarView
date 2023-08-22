import React, { useState, useEffect } from "react";
import MenuLateral from "../Componentes/MenuLateral";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Detalles.css'
import { FaClock, FaPlus, FaPlusCircle, FaPlayCircle } from "react-icons/fa";

function Detalles() {
    const [pelicula, setPelicula] = useState([])
    const { id } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);

    async function getPelicula(id) {
        const peliculaDB = await axios.get("http://localhost:5000/api/peliculas/" + id)
        setPelicula(peliculaDB.data.response)
    }
    useEffect(() => {
        getPelicula(id);
    }, [id]);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <MenuLateral />
            {
                pelicula.length > 0 ?
                    < div
                        className="contenedorDetalles"
                        style={{
                            backgroundImage: `url(${pelicula[0].imagen})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '85vh'
                        }}>

                        <div className="verDetalles overlayDetalles">
                            <p className='tituloDetalles'>{pelicula[0].nombre}</p>
                            <div className="informacionPelicula">
                                <p style={{ marginRight: '20px' }}><FaClock /> {pelicula[0].tiempo}</p>
                                <p>{pelicula[0].clasificacion} <FaPlus /></p>
                            </div>
                            <div className='detalles'>
                                <span className='botonDetalles' onClick={handleToggle}>
                                    <FaPlusCircle/> DETALLES
                                </span>
                            </div>
                            <div className="play">
                                <FaPlayCircle color="white" size="60px"/>
                            </div>
                            {isExpanded && (
                                <div className="Detalles">
                                    <span>{pelicula[0].descripcion}</span>
                                    <h4>Dirección:</h4>
                                    <p>{pelicula[0].direccion}</p>
                                    <h4>Elenco</h4>
                                    <div className="elenco">
                                    <p>{pelicula[0].autor1}</p>
                                    <p>{pelicula[0].autor2}</p>
                                    <p>{pelicula[0].autor3}</p>
                                    <p>{pelicula[0].autor4}</p>
                                    <p>{pelicula[0].autor5}</p>
                                    <p>{pelicula[0].autor6}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div >
                    :
                    <h1> </h1>
            }
        </>
    )
}

export default Detalles