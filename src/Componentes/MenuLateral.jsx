import React, { useState } from 'react';
import '../Styles/MenuLateral.css';
import { FaAngleDoubleRight, FaHome, FaRegHeart, FaWrench, FaShareSquare, FaBars } from "react-icons/fa"
import { Link as LinkRouter } from 'react-router-dom'

function MenuLateral() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-lateral ${isOpen ? 'open' : ''}`}>
      <div className="tab">
        <div className="tab-icon" onClick={toggleMenu}><FaAngleDoubleRight color='white' size='30px' /></div>
      </div>
      <ul className="menu-options">
        <LinkRouter to={"/Home"}>
          <li><FaHome style={{ marginRight: '15px', fontSize: '20px' }} />Inicio</li>
        </LinkRouter>
        <LinkRouter to={"/Categorias"}>
          <li><FaBars style={{ marginRight: '15px', fontSize: '20px' }} />Categorías</li>
        </LinkRouter>
        <LinkRouter to={"/Configuracion"}>
          <li><FaWrench style={{ marginRight: '15px', fontSize: '20px' }} />Configuración</li>
        </LinkRouter>
        <LinkRouter to={"/Favoritos"}>
          <li><FaRegHeart style={{ color: 'red', marginRight: '15px', fontSize: '20px' }} />Favoritos</li>
        </LinkRouter>
        <li><FaShareSquare style={{ marginRight: '15px', fontSize: '20px' }} />Cerrar Sesión</li>
      </ul>
    </div>
  );
};

export default MenuLateral;
