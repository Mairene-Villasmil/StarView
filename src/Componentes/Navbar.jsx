import * as React from 'react';
import '../Styles/Navbar.css'
import Busqueda from './Busqueda';
import Avatar from '@mui/material/Avatar';
import imgAvatar from '../Imagenes/mairene-villasmil.png'


function Navbar() {

    return (
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check"></input>
                <div className="nav-header">
                    <div className="nav-title">
                        <p className='logo'>StarView</p>
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <p><Busqueda /></p>
                    <p>Series</p>
                    <p>Peliculas</p>
                    <p>Populares</p>
                </div>
                <div className='nav-usuario'>
                <Avatar
              sx={{
                width: 60,
                height: 60,
                marginRight: 2,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
              }}
              alt="Avatar"
              src={imgAvatar}
            />
            </div>
            </div>
        </>
    );
}
export default Navbar;