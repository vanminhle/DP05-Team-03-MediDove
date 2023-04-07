import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../hooks/useContextGlobal'
import Sidebar from './SideBar/SideBar'
import '../styles/Header.css'
import langLogo from '../../../src/assets/logos/lang.png'
import logo from '../../../src/assets/logos/logo.png'

const Header = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <span><i className="fas fa-phone"></i> +1 800 833 9780</span>
                           <span><i className="fas fa-envelope"></i> info@example.com</span>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           <Link to="" className="primary_btn btnc">Make Appointment</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div className="logo logo-circle pos-rel">
                           <Link to="/"><img src={logo} alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           <div className="header-lang f-right pos-rel d-none d-lg-block">
                              <div className="lang-icon">
                                 <img src={langLogo} alt=""/>
                                    <span>EN<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 <li><a href="#">USA</a></li>
                                 <li><a href="#">UK</a></li>
                                 <li><a href="#">CA</a></li>
                                 <li><a href="#">AU</a></li>
                              </ul>
                           </div>
                           <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="header__menu f-right">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Home +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/">Home style 1</Link></li>
                                       <li><Link to="">Home style 2</Link></li>
                                       <li><Link to="">Home style 3</Link></li>
                                       <li><Link to="">Home style 4</Link></li>
                                       <li><Link to="">Home style 5</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/department">Department +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/department">Services 01</Link></li>
                                       <li><Link to="">Services 02</Link></li>
                                       <li><Link to="/department/department_detail">Services Details</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/doctor">Doctors +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/doctor">Doctors 01</Link></li>
                                       <li><Link to="">Doctors 02</Link></li>
                                       <li><Link to="/doctor/doctor_detail">Doctors Details</Link></li>
                                    </ul>
                                 </li>
                              </ul>
                           </nav>
                        </div>

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default Header;