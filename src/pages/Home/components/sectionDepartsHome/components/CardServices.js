<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import ServiceImg1 from '../../../../../img/sectionDepartHome/service1.png'


const CardServices = () => {
  return (
    <div className='row'>
        <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='service-box text-center mb-30'>
                    <div className='service-thumb'>
                        <img src={ServiceImg1}/>
                    </div>  
                    <div className='service-content'>
                        <h3 className='heading3'>
                            <Link className='custorm-link' to='/'>
                                Body Surgery
                            </Link>
                        </h3>
                        <p className='paragraph'>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <Link className='service-link' to='/'>Read More</Link>
                    </div>
                </div>
        </div>
        <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='service-box text-center mb-30'>
                    <div className='service-thumb'>
                        <img src={ServiceImg1}/>
                    </div>  
                    <div className='service-content'>
                        <h3 className='heading3'>
                            <Link className='custorm-link' to='/'>
                                Body Surgery
                            </Link>
                        </h3>
                        <p className='paragraph'>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <Link className='service-link' to='/'>Read More</Link>
                    </div>
                </div>
        </div>
        <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='service-box text-center mb-30'>
                    <div className='service-thumb'>
                        <img src={ServiceImg1}/>
                    </div>  
                    <div className='service-content'>
                        <h3 className='heading3'>
                            <Link className='custorm-link' to='/'>
                                Body Surgery
                            </Link>
                        </h3>
                        <p className='paragraph'>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <Link className='service-link' to='/'>Read More</Link>
                    </div>
                </div>
        </div>
        <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='service-box text-center mb-30'>
                    <div className='service-thumb'>
                        <img src={ServiceImg1}/>
                    </div>  
                    <div className='service-content'>
                        <h3 className='heading3'>
                            <Link className='custorm-link' to='/'>
                                Body Surgery
                            </Link>
                        </h3>
                        <p className='paragraph'>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <Link className='service-link' to='/'>Read More</Link>
                    </div>
                </div>
        </div>
        <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='service-box text-center mb-30'>
                    <div className='service-thumb'>
                        <img src={ServiceImg1}/>
                    </div>  
                    <div className='service-content'>
                        <h3 className='heading3'>
                            <Link className='custorm-link' to='/'>
                                Body Surgery
                            </Link>
                        </h3>
                        <p className='paragraph'>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <Link className='service-link' to='/'>Read More</Link>
                    </div>
                </div>
        </div>
        <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='service-box text-center mb-30'>
                    <div className='service-thumb'>
                        <img src={ServiceImg1}/>
                    </div>  
                    <div className='service-content'>
                        <h3 className='heading3'>
                            <Link className='custorm-link' to='/'>
                                Body Surgery
                            </Link>
                        </h3>
                        <p className='paragraph'>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        </p>
                        <Link className='service-link' to='/'>Read More</Link>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default CardServices
=======
import React from 'react';
import { Link } from 'react-router-dom';

const CardServices = ({ title, subtitle, readMore, icon }) => {
  return (
    <>
      <div className='col-xl-4 col-lg-6 col-md-6'>
        <div className='service-box text-center mb-30'>
          <div className='service-thumb'>
            <img
              src={require(`../../../../../img/sectionDepartHome/service${icon}.png`)}
              alt={icon}
            />
          </div>
          <div className='service-content'>
            <h3 className='heading3'>
              <Link className='custorm-link' to='/'>
                {title}
              </Link>
            </h3>
            <p className='paragraph'>{subtitle}</p>
            <Link className='service-link' to='/'>
              {readMore}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardServices;
>>>>>>> 9361b39633293f8f987c67f85acbbd02bc7b7213
