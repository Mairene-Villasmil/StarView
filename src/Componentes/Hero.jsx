import React, { useState, useEffect } from 'react';
import '../Styles/Hero.css';

function Hero() {
  const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowAnimation(false);
        }, 5000);
    }, []);
  useEffect(() => {
    const elementos = document.querySelectorAll('.elemento');

    elementos.forEach((elemento, index) => {
      setTimeout(() => {
        elemento.classList.add('aparecer');
      }, index * 300); 
    });
  }, []);

  return (
    <div className={`hero ${showAnimation ? 'show' : 'hide'}`}>
      <div className="contenedor">
      <div className="elemento">S</div>
      <div className="elemento">t</div>
      <div className="elemento">a</div>
      <div className="elemento">r</div>
      <div className="elemento">V</div>
      <div className="elemento">i</div>
      <div className="elemento">e</div>
      <div className="elemento">w</div>
    </div>
    </div>
    
  );
}

export default Hero;
