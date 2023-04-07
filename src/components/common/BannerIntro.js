import React from 'react';
import '../../pages/Doctor/pages/DoctorOne/style.css'

export default function BannerIntro({content1, content2, titleMainP}) {
  return (
    <>
      <section className='breadcrumb-bg pt-200 pb-180 page_header_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-9'>
              <div className='page-title'>
                <p className='small-text pb-15'>{content1}</p>
                <h1>{content2}</h1>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 d-flex justify-content-start justify-content-md-end align-items-center'>
              <div className='page-breadcrumb'>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb '>
                    <li className='breadcrumb-item'>
                      <a href='/'>Home</a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      {titleMainP}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
