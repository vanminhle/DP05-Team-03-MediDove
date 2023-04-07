import React from 'react';
import './doctorDetails.css';
import doctorImg from '../../../img/member-big.jpg';
import serviceIcon1 from '../../../img/more-ser-1.png';
import serviceIcon2 from '../../../img/ser-fea-icon-2.png';

export const DoctorRight = () => {
  return (
    <div>
      <div className='doctorDetails'>
        <div className='doctorImg'>
          <img src={doctorImg} alt='doctorImg'></img>
        </div>
        <div className='doctorInfo'>
          <h3>
            <a href='#'>Halim D. Keliano</a>
          </h3>
          <h6 className='doctorRole'>Dentist & Neurologist</h6>
        </div>
        <div className='socialIcon'>
          <ul>
            <li>
              <i className='fa-brands fa-facebook-f'></i>
            </li>
            <li>
              <i className='fa-brands fa-twitter'></i>
            </li>
            <li>
              <i className='fa-brands fa-behance'></i>
            </li>
            <li>
              <i className='fa-brands fa-linkedin'></i>
            </li>
            <li>
              <i className='fa-brands fa-pinterest'></i>
            </li>
            <li>
              <i className='fa-brands fa-youtube'></i>
            </li>
          </ul>
        </div>
      </div>
      <div className='doctorDetails'>
        <div className='qualifications'>
          <h3>
            <a href='#'>Qualifications</a>
          </h3>
        </div>
        <div className='serviceList'>
          <ul>
            <li>
              <a href='#'>
                <div className='serviceIcon'>
                  <img src={serviceIcon1} alt='service1' />
                </div>
                <div className='serviceTitle'>
                  <p>Master of Science</p>
                  <span>Oxford Univercity (2011 - 2014)</span>
                </div>
              </a>
            </li>
            <li>
              <a href='#'>
                <div className='serviceIcon'>
                  <img src={serviceIcon2} alt='service1' />
                </div>
                <div className='serviceTitle'>
                  <p>Neurology test</p>
                  <span>Stanford Versity (2015 - 2021)</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='doctorDetails'>
        <div className='qualifications'>
          <h3>
            <a href='#'>Get Some Advice?</a>
          </h3>
        </div>
        <div className='formInput'>
          <div className=' formItem'>
            <input type='text' placeholder='Enter Your Name' />
          </div>
          <div className=' formItem'>
            <input type='text' placeholder='Enter Your Email' />
          </div>
          <select className='form-select formItem' aria-label='Default select example'>
            <option defaultValue>Select type of care</option>
            <option value='1'>Select type of care</option>
          </select>
        </div>
        <div className='formBtn'>
          <button type='button' className='btn btn-primary sectionBtn'>
            <a href='#'>request for a call</a>
            <span>+</span>
          </button>
        </div>
      </div>
      <div className='doctorDetails'>
        <div className='qualifications'>
          <h3>
            <a href='#'>Languages</a>
          </h3>
          <div className='langIcon'>
            <ul>
              <li>
                <a href='#'>en</a>
              </li>
              <li>
                <a href='#'>es</a>
              </li>
              <li>
                <a href='#'>bd</a>
              </li>
              <li>
                <a href='#'>la</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
