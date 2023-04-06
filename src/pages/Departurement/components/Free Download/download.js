import React from 'react';
import doctorImage from '../../../../img/service-doctors.png';
import line from '../../../../img/section-title-line.png';
import pdfIcon from '../../../../img/pdf.png';
import docsIcon from '../../../../img/doc.png';
import zipIcon from '../../../../img/zip.png';
import './download.css';
import MoreService from '../MoreService/MoreService';

export const FreeDownload = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-7 contentLeft'>
          <div className='sectionImg'>
            <img src={doctorImage} alt='doctor' />
          </div>
          <div className='heading'>
            <h5>download</h5>
            <h1>Free Download Resources</h1>
          </div>
          <div className='sectionLine'>
            <img src={line} alt='line' />
          </div>
          <div className='downloadArea'>
            <a class='download-box ' href='#'>
              <div className='boxItem'>
                <img src={pdfIcon} alt='line' />
                <span className='link'>The Balanced Care Method Flyer.pdf</span>
                <span className='data'>57KB</span>
              </div>
            </a>
            <a class='download-box ' href='#'>
              <div className='boxItem'>
                <img src={docsIcon} alt='line' />
                <span className='link'>The Balanced Care Method Flyer.pdf</span>
                <span className='data'>57KB</span>
              </div>
            </a>
            <a class='download-box ' href='#'>
              <div className='boxItem'>
                <img src={zipIcon} alt='line' />
                <span className='link'>The Balanced Care Method Flyer.pdf</span>
                <span className='data'>57KB</span>
              </div>
            </a>
          </div>
        </div>
        <div className='col-xl-5 col-lg-4'>
          <MoreService />
        </div>
      </div>
    </div>
  );
};
