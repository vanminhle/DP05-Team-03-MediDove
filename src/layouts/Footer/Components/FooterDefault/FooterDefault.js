import React from 'react';
import { Link } from 'react-router-dom';
import './../style.css';
import HomeSingleFooterBlog from './HomeSingleFooterBlog';
import FooterLogo from '../../../../img/footer/footer/footer-logo-3.png';

export const FooterDefault = () => {
  return (
    <>
      <footer>
        <div className='footer-top primary-bg footer-map pos-rel pt-120 pb-80'>
          <div className='container'>
            <div
              className='row align-items-center'
              style={{ position: 'relative', zIndex: '9999' }}
            >
              <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='footer-contact-info footer-contact-info-3 mb-4'>
                  <div className='footer-logo mb-5'>
                    <Link to='/'>
                      <img src={FooterLogo} alt='' />
                    </Link>
                  </div>
                  <div className='footer-contact-content mb-25'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                  </div>
                  <div className='footer-emailing'>
                    <ul>
                      <li>
                        <i className='far fa-envelope'></i>info@examplemedical.com
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
              <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='footer-widget mb-4'>
                  <div className='footer-title'>
                    <h3>Departments</h3>
                  </div>
                  <div className='footer-menu footer-menu-2'>
                    <ul>
                      <li>
                        <Link to='/department/department_detail'>Surgery and Radiology</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Departments</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Family Medicine</Link>
                      </li>
                      <li>
                        <Link to='/doctor'>Our Doctors</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Women’s Health</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>News</Link>
                      </li>
                      <li>
                        <Link to=''>Optician</Link>
                      </li>
                      <li>
                        <Link to=''>Shop</Link>
                      </li>
                      <li>
                        <Link to=''>Pediatrics</Link>
                      </li>
                      <li>
                        <Link to=''>Contact Us</Link>
                      </li>
                      <li>
                        <Link to='/department/department_detail'>Dermatology</Link>
                      </li>
                      <li>
                        <Link to=''>Book an Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='footer-widget mb-4'>
                  <div className='footer-title'>
                    <h3>News Feeds</h3>
                  </div>
                  <div className='blog-feeds pe-15'>
                    <HomeSingleFooterBlog image='1' />
                    <HomeSingleFooterBlog image='2' />
                    <HomeSingleFooterBlog image='3' />
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
