import React, { useState } from 'react';
import '../Styles/MenuLateral.css';
import { FaAngleDoubleRight, FaHome, FaRegHeart, FaWrench, FaShareSquare, FaBars} from "react-icons/fa"

function MenuLateral () {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-lateral ${isOpen ? 'open' : ''}`}>
      <div className="tab">
        <div className="tab-icon" onClick={toggleMenu}><FaAngleDoubleRight color='white' size='30px'/></div>
      </div>
      <ul className="menu-options">
        <li><FaHome style={{marginRight:'15px', fontSize:'20px'}}/>Inicio</li>
        <li><FaBars style={{marginRight:'15px', fontSize:'20px'}}/>Categorías</li>
        <li><FaWrench style={{marginRight:'15px', fontSize:'20px'}}/>Configuración</li>
        <li><FaRegHeart style={{color:'red', marginRight:'15px', fontSize:'20px'}}/>Favoritos</li>
        <li><FaShareSquare style={{marginRight:'15px', fontSize:'20px'}}/>Cerrar Sesión</li>
      </ul>
    </div>
  );
};

export default MenuLateral;
