import React from 'react';
import './departmentHealthCare.css';
export default function DepartmentHealthCare() {
  return (
    <>
      <section className='about-area pt-120 pb-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12'>
              <div className='section-title section-title-m-0 pos-rel mb-50 text-end'>
                <div className='section-icon'>
                  <img
                    className='section-back-icon back-icon-right'
                    src='https://medi-dove.netlify.app/img/section/section-back-icon.png'
                    alt=''
                  />
                </div>
                <div className='section-text section-text-small pos-rel'>
                  <h5>health care facility</h5>
                  <h1>Would you rather stay at home than go into a health care facility?</h1>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12'>
              <div className='facalty-text mb-50'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost
                  rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='service-box text-center mb-30'>
                <div className='service-thumb'>
                  <img src='https://medi-dove.netlify.app/img/services/service1.png' alt='' />
                </div>
                <div className='service-content'>
                  <h3>
                    <a href='/servicesDetails'>Body Surgery</a>
                  </h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo.
                  </p>
                  <a class='service-link' href='/department/department_detail'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='service-box text-center mb-30'>
                <div className='service-thumb'>
                  <img src='https://medi-dove.netlify.app/img/services/service2.png' alt='' />
                </div>
                <div className='service-content'>
                  <h3>
                    <a href='/servicesDetails'>Dental Care</a>
                  </h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo.
                  </p>
                  <a class='service-link' href='/department/department_detail'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='service-box text-center mb-30'>
                <div className='service-thumb'>
                  <img src='https://medi-dove.netlify.app/img/services/service3.png' alt='' />
                </div>
                <div className='service-content'>
                  <h3>
                    <a href='/servicesDetails'>Service Content</a>
                  </h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo.
                  </p>
                  <a class='service-link' href='/department/department_detail'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='service-box text-center mb-30'>
                <div className='service-thumb'>
                  <img src='https://medi-dove.netlify.app/img/services/service4.png' alt='' />
                </div>
                <div className='service-content'>
                  <h3>
                    <a href='/department/department_detail'>Blood Cancer</a>
                  </h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo.
                  </p>
                  <a class='service-link' href='/department/department_detail'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='service-box text-center mb-30'>
                <div className='service-thumb'>
                  <img src='https://medi-dove.netlify.app/img/services/service5.png' alt='' />
                </div>
                <div className='service-content'>
                  <h3>
                    <a href='/department/department_detail'>Neurology Sargery</a>
                  </h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo.
                  </p>
                  <a class='service-link' href='/department/department_detail'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='service-box text-center mb-30'>
                <div className='service-thumb'>
                  <img src='https://medi-dove.netlify.app/img/services/service6.png' alt='' />
                </div>
                <div className='service-content'>
                  <h3>
                    <a href='/department/department_detail'>Allergic Issue</a>
                  </h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo.
                  </p>
                  <a class='service-link' href='/department/department_details'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
