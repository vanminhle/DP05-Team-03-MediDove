import React from 'react';
import './DeparturementDetail.css';
export default function DepartmentDetail() {
  return (
    <section class='breadcrumb-bg pt-200 pb-180 page_header_bg'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-9 col-md-9'>
            <div class='page-title'>
              <p class='small-text pb-15'>We are here for your care.</p>
              <h1>Our Services</h1>
            </div>
          </div>
          <div class='col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-end align-items-center'>
            <div class='page-breadcumb'>
              <nav aria-label='breadcrumb'>
                <ol class='breadcrumb '>
                  <li class='breadcrumb-item'>
                    <a href='/'>Home</a>
                  </li>
                  <li class='breadcrumb-item active' aria-current='page'>
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
