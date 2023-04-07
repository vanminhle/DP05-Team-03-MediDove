import React from 'react';
import { DoctorLeft } from '../../components/doctorLeft';
import { DoctorRight } from '../../components/doctorRight';
import { ContactMap } from '../../components/ContactMap';
import { HeaderDetail } from '../../components/HeaderDetail';
import '../../components/doctorDetails.css';

export default function DoctorDetail() {
  return (
    <>
      <HeaderDetail />
      <div className='container doctorDetailsArea'>
        <div className='row'>
          <div className='col-xl-7 col-lg-7'>
            <DoctorLeft />
            <ContactMap />
          </div>
          <div className='col-xl-5 col-lg-5'>
            <DoctorRight />
          </div>
        </div>
      </div>
    </>
  );
}
