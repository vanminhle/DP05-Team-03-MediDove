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
