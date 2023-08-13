import React from "react";
import '../Styles/Tarjetas.css'
import img1 from '../Imagenes/avatarC.jpg'
import img2 from '../Imagenes/barbieC.webp'
import img3 from '../Imagenes/duneC.jpg'
import img4 from '../Imagenes/guardianesC.jpg'
import img5 from '../Imagenes/sirenitaC.jpg'
import img6 from '../Imagenes/johnC.jpg'
import img7 from '../Imagenes/spidermanC.jpg'
import img8 from '../Imagenes/marioC.avif'
import img9 from '../Imagenes/maverickC.avif'
import img10 from '../Imagenes/FFXC.jpg';

function Tarjetas({ imageSrc, title, duration }) {
    return (
        <div className="contenedorTarjetas">
            <div className="card">
                <div className="card-image">
                    <img src={img2} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img3} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img1} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img4} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img5} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img6} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img7} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img8} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img9} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={img10} alt="img" />
                </div>
                <div className="card-details">
                    <h3 className="card-title">TITULO</h3>
                    <p className="card-duration">1h 48min</p>
                    <div className="buttons">
                        <button className="play-button">Reproducir</button>
                        <button className="details-button">Detalles</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjetas