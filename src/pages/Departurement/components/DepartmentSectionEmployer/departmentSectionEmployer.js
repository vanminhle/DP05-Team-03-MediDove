import React from 'react';
import './departmentSectionEmployer.css';

export default function DepartmentSectionEmployer() {
  return (
    <section class='hiring-area pt-120 pb-120'>
      <div class='container'>
        <div class='row g-0 hire-bg-2'>
          <div class='col-xl-6 col-lg-6 p-0'>
            <div class='hire-img'>
              <img
                class='img w-100'
                src='https://medi-dove.netlify.app/img/hire/hire1.jpg'
                alt=''
              />
            </div>
          </div>
          <div class='col-xl-6 col-lg-6 p-0'>
            <div class='hire-text'>
              <h1>For Employers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <a class='primary_btn btn-icon btn-icon-green ml-0 btn-1' href='/contact'>
                <span>+</span>Contact us
              </a>
            </div>
          </div>
        </div>
        <div class='row g-0 hire-bg'>
          <div class='col-xl-6 col-lg-6 p-0'>
            <div class='hire-text'>
              <h1>For Employers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <a class='primary_btn btn-icon ml-0 btn-2' href='/contact'>
                <span>+</span>apply today
              </a>
            </div>
          </div>
          <div class='col-xl-6 col-lg-6 p-0'>
            <div class='hire-img'>
              <img
                class='img w-100'
                src='https://medi-dove.netlify.app/img/hire/hire2.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
