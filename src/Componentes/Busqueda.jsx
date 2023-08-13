import React from "react";
import { FaSearch } from 'react-icons/fa';
import '../Styles/Busqueda.css'

function Busqueda() {
    return (
        <>
        <div className="busqueda">
            <input type="text" placeholder="Titulo" />
            <FaSearch style={{marginLeft:'15px', marginTop:'5px'}}/>
        </div>  
        </>
    )
}

export default Busqueda