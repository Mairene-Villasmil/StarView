import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/Carrusel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../Imagenes/avatar-the-way-of-water-avatar-2-2022-movies-sam-2560x1440-8963.jpg'
import img2 from '../Imagenes/barbie.jpeg'
import img3 from '../Imagenes/dune.jpg'
import img4 from '../Imagenes/guardianes.jpeg'
import img5 from '../Imagenes/sirenita.webp'
import img6 from '../Imagenes/johnwick.webp'
import img7 from '../Imagenes/spiderman.jpg'
import img8 from '../Imagenes/mario.jpg'
import img9 from '../Imagenes/maverick.png'
import img10 from '../Imagenes/FFX.jpg';
import titulo1 from '../Imagenes/avatarT.png'
import titulo2 from '../Imagenes/barbieT.png'
import titulo3 from '../Imagenes/duneT.png'
import titulo4 from '../Imagenes/guardianesT.png'
import titulo5 from '../Imagenes/sirenitaT.webp'
import titulo6 from '../Imagenes/johnT.png'
import titulo7 from '../Imagenes/spidermanT.webp'
import titulo8 from '../Imagenes/marioT.png'
import titulo9 from '../Imagenes/maverickT.png'
import titulo10 from '../Imagenes/Fast_X_logo.png'
import { FaExclamationCircle, FaRegCaretSquareRight } from "react-icons/fa";

function Carrusel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo1} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide><img src={img2} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo2} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img3} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo3} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img4} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo4} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img5} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo5} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img6} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo6} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img7} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo7} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img8} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo8} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img9} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo9} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img10} className="imgPelicula" alt="img" />
                    <div className="informacion">
                        <img src={titulo10} className="imgTitulo" alt="img" />
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil obcaecati quia
                            rerum facilis omnis ea aperiam eum, error modi quisquam qui repellat dolores consectetur
                            velit! Sunt consectetur animi asperiores. </p>
                        <div className="botones">
                            <button><FaRegCaretSquareRight style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Ver</button>
                            <button><FaExclamationCircle style={{ color: 'red', fontSize: '25px', marginRight: '10px' }} /> Detalles</button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent} style={{ fontSize: '15px' }}></span>
                </div>
            </Swiper>
        </>
    )
}

export default Carrusel