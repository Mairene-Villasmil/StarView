import React from "react";
import '../Styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'
import { FaMapMarkedAlt, FaPhone, FaEnvelopeOpen, FaFacebook, FaTwitter, FaGoogle, FaRegPaperPlane } from "react-icons/fa"

function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FaMapMarkedAlt style={{fontSize:'30px'}}/>
                                    <div className="cta-text">
                                        <h4>Dirección</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FaPhone style={{fontSize:'30px'}}/>
                                    <div className="cta-text">
                                        <h4>Contacto</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <FaEnvelopeOpen style={{fontSize:'30px'}}/>
                                    <div className="cta-text">
                                        <h4>E-mail</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <LinkRouter to={"/Home"}>
                                            <p classNameName='logo'>StarView</p>
                                        </LinkRouter>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Siguenos</span>
                                        <FaFacebook style={{fontSize:'30px', margin:'0px 20px', color:'#2a2ae0'}}/>
                                        <FaTwitter style={{fontSize:'30px', margin:'0px 20px', color:'#236e99'}}/>
                                        <FaGoogle style={{fontSize:'30px', margin:'0px 20px', color:'#d82929'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Links Importantes</h3>
                                    </div>
                                    <ul>
                                        <li>Inicio</li>
                                        <li>Nosotros</li>
                                        <li>Contactos</li>
                                        <li>Otros Servicios</li>
                                        <li>Servicios</li>
                                        <li>Equipo Tecnico</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribete</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>No deje de suscribirse a nuestros nuevos servicios, completa el formulario a continuación.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><FaRegPaperPlane style={{fontSize:'20px'}}/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer