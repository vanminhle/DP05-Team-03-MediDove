import React from 'react';
import { DoctorLeft } from '../../components/doctorLeft';
import { DoctorRight } from '../../components/doctorRight';
import '../../components/doctorDetails.css';

export default function DoctorDetail() {
  return (
    <div className='container doctorDetailsArea'>
      <div className='row'>
        <div className='col-xl-7 col-lg-8'>
          <DoctorLeft />
        </div>
        <div className='col-xl-5 col-lg-4'>
          <DoctorRight />
        </div>
      </div>
    </div>
  );
}
