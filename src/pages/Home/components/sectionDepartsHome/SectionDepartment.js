import React from 'react'
import NurseIcon from '../../../../img/sectionDepartHome/section-back-icon.png'
import LineImg from '../../../../img/sectionDepartHome/section-title-line.png'
import CardServices from './components/CardServices'

import './departmentHome.css'

const SectionDepartment = () => {
  return (
    <section className='servcies-area gray-bg pt-115 pb-90'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
            <div className='section-title-service text-center pos-rel mb-75'>
              <div className='section-icon'>
                <img className='section-back-icon' src={NurseIcon} alt=''/>
              </div>
              <div className='section-text-service pos-rel home_ser_title'>
                <h5 className='heading5'>
                    Departments
                </h5>
                <h1 className='heading1'>
                Managed Your Heathcare Services
                </h1>
              </div>
              <div className='section-line pos-rel'>
                <img src={LineImg}/>
              </div>
            </div>
          </div>
        </div>
        <CardServices/>
      </div>
    </section>
  )
}

export default SectionDepartment
