import React, { useState, useEffect } from 'react';
import Hero from '../Componentes/Hero';
import MenuLateral from '../Componentes/MenuLateral'
import '../Styles/Home.css';
import Carrusel from '../Componentes/Carusel';
import DatosApi from '../Servicios.jsx/DatosApi';

function Home({peliculas}) {
    const [showContent, setShowContent] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 5000);
    }, []);
    return (
        <div>
            <section >
                <Hero />
            </section>
            <MenuLateral isOpen={showContent} />
            {showContent && (
                <section className="contenido" style={{ color: 'white', fontSize: '50px' }}>
                    <Carrusel />
                    <DatosApi peliculas={peliculas} />
                </section>
            )}
        </div>
    );
}

export default Home;
