import React from 'react';
import { Link } from 'react-router-dom';
import './../style.css';
import FooterLogo from '../../../../img/footer/footer/footer-logo.png';

export const FooterHome = () => {
  return (
    <>
      <footer>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-5 col-lg-6 col-md-8'>
                <div className='footer-contact-info mb-4'>
                  <div className='emergency-call fix'>
                    <div className='emergency-call-icon float-start'>
                      <i className='fas fa-phone'></i>
                    </div>
                    <div className='emergency-call-text float-start'>
                      <h6>Emergency number</h6>
                      <span>202-555-0104</span>
                    </div>
                  </div>
                  <div className='footer-logo mb-5'>
                    <Link to='/'>
                      <img src={FooterLogo} alt='' />
                    </Link>
                  </div>
                  <div className='footer-contact-content mb-4'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                  </div>
                  <div className='footer-emailing'>
                    <ul>
                      <li>
                        <i className='far fa-envelope'></i>
                        info@examplemedical.com
                      </li>
                      <li>
                        <i className='far fa-clone'></i>examplemedical.com
                      </li>
                      <li>
                        <i className='far fa-flag'></i>227 Marion Street, Columbia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-2 offset-xl-1 col-lg-3 col-md-4'>
                <div className='footer-widget mb-30'>
                  <div className='footer-title'>
                    <h3>Departments</h3>
                  </div>
                  <div className='footer-menu'>
                    <ul>
                      <li>
                        <Link to='/department/department_detail'>Surgery and Radiology</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Family Medicine</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Women’s Health</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Optician</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Pediatrics</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Dermatology</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block'>
                <div className='footer-widget mb-30'>
                  <div className='footer-title'>
                    <h3>Quick Links</h3>
                  </div>
                  <div className='footer-menu'>
                    <ul>
                      <li>
                        <Link to='/department/department_detail'>Departments</Link>
                      </li>
                      <li>
                        <Link to='/doctor'>Our Doctors</Link>
                      </li>
                      <li>
                        <Link to='/'>News</Link>
                      </li>
                      <li>
                        <Link to='/'>Shop</Link>
                      </li>
                      <li>
                        <Link to='/'>Contact Us</Link>
                      </li>
                      <li>
                        <Link to='/'>Book an Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom pt-4 pb-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='footer-copyright text-center'>
                  <p className='white-color'>Copyright by@ BasicTheme - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
