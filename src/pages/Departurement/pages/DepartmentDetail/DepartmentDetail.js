import React from 'react';
import DepartmentIntroduction from '../../components/Department Introduction/departmentIntroduction';
import DepartmentHealthCare from '../../components/DepartmentHealthCare/departmentHealthCare';
export default function DepartmentDetail() {
  return (
    <>
      <DepartmentIntroduction></DepartmentIntroduction>

      <DepartmentHealthCare></DepartmentHealthCare>
    </>
  );
}
