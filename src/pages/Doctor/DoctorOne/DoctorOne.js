import React from 'react';
import OurTeam from './OurTeam/OurTeam';
import Available from './Available/Available';
import Header from './HeaderDoctor/Header';
import './../style.css';

const DoctorOne = () => {
  return (
    <>
      <Header />
      <OurTeam />
      <Available />
    </>
  );
};

export default DoctorOne;
