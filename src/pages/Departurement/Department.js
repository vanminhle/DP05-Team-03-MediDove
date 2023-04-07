import React from 'react';
import { QuoteCalculator } from './components/Quote Calculator/quoteCalculator';
import DepartmentHealthCare from './components/DepartmentHealthCare/departmentHealthCare';
import DepartmentSectionEmployer from './components/DepartmentSectionEmployer/departmentSectionEmployer';
import BannerIntro from '../../components/common/BannerIntro'

export default function Departurement() {
  return (
    <>
      <BannerIntro content1="We are here for your care." content2="Our services" titleMainP="Services"/>
      <DepartmentHealthCare />
      <QuoteCalculator />
      <DepartmentSectionEmployer />
    </>
  );
}
