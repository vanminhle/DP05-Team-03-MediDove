import React from 'react'
import { Link } from 'react-router-dom'
import './sectionAvailable.css'

const SectionAvailable = () => {
  return (
    <section className='available-area available-map primary-bg pos-rel pt-115 pb-60'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-10'>
                    <div className='section-title-avail pos-rel mb-45'>
                        <div className='section-text section-text-white pos-rel'>
                            <h5 className='heading5'>We are available 24/7</h5>
                            <h1 className='heading1 color-white'>We Always Ready For A Challenge.</h1>
                        </div>
                    </div>
                    <div className='section-button-avail section-button-left mb-30'>
                        <Link className='primary_btn btn-icon ml-0'>
                            <span className='custom-plus'>+</span>
                            Make Appointemnt
                        </Link>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-8'>
                    <div className='cta-satis'>
                        <div className='satisfied-patients mb-50'>
                            <h1 className='heading1'>1M+</h1>
                            <h5 className='heading5'>
                                <i className='fa fa-user'></i>
                                    Satisfied Patients
                            </h5>
                            <p className='custom-parah'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className='word-award mb-50'>
                            <h1 className='heading1'>100+</h1>
                            <h5 className='heading5'>
                                <i className='far fa-thumbs-up'></i>
                                    Word Awards
                            </h5>
                            <p className='custom-parah'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionAvailable
