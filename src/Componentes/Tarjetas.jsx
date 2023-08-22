import React from "react";
import '../Styles/Tarjetas.css'
import { Link as LinkRouter } from 'react-router-dom'

function Tarjetas({ pelicula }) {
    return (

        <div className="card">
            <div className="card-image">
                <img src={pelicula.imagen} alt={pelicula.nombre} />
            </div>
            <div className="card-details">
                <h3 className="card-title">{pelicula.nombre}</h3>
                <p className="card-duration">{pelicula.duracion}</p>
                <div className="buttons">
                    <LinkRouter to={'/'}>
                        <button className="play-button">Reproducir</button>
                    </LinkRouter>
                    <LinkRouter to={'/Detalles/' + pelicula._id}>
                        <button className="details-button">Detalles</button>
                    </LinkRouter>
                </div>
            </div>
        </div>
    )
}

export default Tarjetas