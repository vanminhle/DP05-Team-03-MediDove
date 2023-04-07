import React from 'react';
import doctorImage from '../../../../img/service-doctors.png';
import line from '../../../../img/section-title-line.png';
import pdfIcon from '../../../../img/pdf.png';
import docsIcon from '../../../../img/doc.png';
import zipIcon from '../../../../img/zip.png';
import Feedback from '../Feedback/Feedback';
import './download.css';
import MoreService from '../MoreService/MoreService';
import DentalCate from '../SectionDentalCare/DentalCate';
import BannerIntro from '../../../../components/common/BannerIntro';

export const FreeDownload = () => {
  return (
    <>
      <BannerIntro
        content1='We are here for your care.'
        content2='Our services'
        titleMainP='Details'
      />
      <div className='container department-detail'>
        <div className='row'>
          <div className='col-xl-7 col-lg-7 contentLeft'>
            <DentalCate />
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
              <a className='download-box ' href='/'>
                <div className='boxItem'>
                  <img src={pdfIcon} alt='line' />
                  <span className='link'>The Balanced Care Method Flyer.pdf</span>
                  <span className='data'>57KB</span>
                </div>
              </a>
              <a className='download-box ' href='/'>
                <div className='boxItem'>
                  <img src={docsIcon} alt='line' />
                  <span className='link'>The Balanced Care Method Flyer.pdf</span>
                  <span className='data'>57KB</span>
                </div>
              </a>
              <a className='download-box ' href='/'>
                <div className='boxItem'>
                  <img src={zipIcon} alt='line' />
                  <span className='link'>The Balanced Care Method Flyer.pdf</span>
                  <span className='data'>57KB</span>
                </div>
              </a>
            </div>
            <Feedback />
          </div>
          <MoreService />
        </div>
      </div>
    </>
  );
};
