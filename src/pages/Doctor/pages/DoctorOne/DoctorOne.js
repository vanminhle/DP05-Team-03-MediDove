import React from 'react';
import OurTeam from './OurTeam/OurTeam';
import Available from './Available/Available';
import Header from './HeaderDoctor/Header';
import CompanySize from './CompanySize/CompanySize';
import './style.css';

const DoctorOne = () => {
  return (
    <>
      <Header />
      <OurTeam />
      <Available />
      <CompanySize />
    </>
  );
};

export default DoctorOne;
