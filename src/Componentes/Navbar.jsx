import * as React from 'react';
import '../Styles/Navbar.css'
import Busqueda from './Busqueda';
import Avatar from '@mui/material/Avatar';
import { Link as LinkRouter } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check"></input>
                <div className="nav-header">
                    <div className="nav-title">
                        <LinkRouter to={"/Home"}>
                            <p className='logo'>StarView</p>
                        </LinkRouter>
                    </div>
                </div>
                <div className="nav-btn">
                    <babel for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </babel>
                </div>

                <div className="nav-links">
                    <p><Busqueda /></p>
                    <LinkRouter to={"/Home"}>
                        <p>Inicio</p>
                    </LinkRouter>
                    <LinkRouter to={""}>
                        <p>Novedades</p>
                    </LinkRouter>
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
                    />
                </div>
            </div>
        </>
    );
}
export default Navbar;