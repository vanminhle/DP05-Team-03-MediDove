import React from 'react';
import { QuoteCalculator } from './components/Quote Calculator/quoteCalculator';
import DepartmentHealthCare from './components/DepartmentHealthCare/departmentHealthCare';
import DepartmentSectionEmployer from './components/DepartmentSectionEmployer/departmentSectionEmployer';

export default function Departurement() {
  return (
    <>
      <DepartmentHealthCare></DepartmentHealthCare>
      <QuoteCalculator />
      <DepartmentSectionEmployer></DepartmentSectionEmployer>
    </>
  );
}
