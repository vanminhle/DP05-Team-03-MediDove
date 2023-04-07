import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../../../img/doctor/section-title-line.png';
import image2 from '../../../../../img/doctor/section-back-icon.png';
import CardTeam from '../../../../Home/components/sectionTeam/components/CardTeam';
import { getTeams } from '../../../../../apiServices/api';

const OurTeam = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getTeams();
    setData(response);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className='team-area pt-115 pb-55'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-7 col-md-10'>
              <div className='section-title pos-rel mb-75'>
                <div className='section-icon'>
                  <img className='section-back-icon back-icon-left' src={image2} alt='' />
                </div>
                <div className='section-text pos-rel'>
                  <h5>Our Team</h5>
                  <h1>A Professional & Care Provider</h1>
                </div>
                <div className='section-line pos-rel'>
                  <img src={image1} alt='' />
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-5'>
              <div className='section-button text-end d-none d-lg-block pt-80'>
                <Link to='/doctor/doctor_detail' className='primary_btn btn-icon ml-0'>
                  <span>+</span>Make Appointment
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* <div className='col-xl-4 col-lg-4 col-md-6'>
              <div className='team-box text-center mb-60'>
                <div className='team-thumb mb-45 pos-rel'>
                  <img src={image3} alt='' />
                  <a className='team-link' href='/doctor/doctor_Detail'>
                    +
                  </a>
                </div>
                <div className='team-content'>
                  <h3>Rosalina D. Williamson</h3>
                  <h6>Founder</h6>
                </div>
              </div>
            </div> */}

            {
              data.map((item) => (

                <CardTeam key={item.id} name={item.name} role={item.role} avatar={item.id} checkedPage="doctor"/>
              ))
            }
            
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
