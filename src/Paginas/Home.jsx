import React, { useState, useEffect } from 'react';
import Hero from '../Componentes/Hero';
import MenuLateral from '../Componentes/MenuLateral'
import '../Styles/Home.css';
import Carrusel from '../Componentes/Carusel';
import Tarjetas from '../Componentes/Tarjetas';

function Home() {
    const [showAnimation, setShowAnimation] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowAnimation(false);
            setShowContent(true);
        }, 5000); // Ajusta el valor para el retraso deseado
    }, []);
    return (
        <div>
            <section className={`hero ${showAnimation ? 'show' : 'hide'}`}>
                <Hero />
            </section>
            <MenuLateral isOpen={showContent} />
            {showContent && (
                <section className="contenido" style={{color:'white', fontSize:'50px'}}>
                    <Carrusel/>
                    <Tarjetas/>
                </section>
            )}
        </div>
    );
}

export default Home;
