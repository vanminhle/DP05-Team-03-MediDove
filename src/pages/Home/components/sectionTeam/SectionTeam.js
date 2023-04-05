import {React, useState, useEffect} from 'react';
import './sectionTeam.css';
import NurseIcon from '../../../../img/sectionTeam/section-back-icon.png';
import LineTitleTeam from '../../../../img/sectionTeam/section-title-line.png';
import { Link } from 'react-router-dom';
import { getTeams } from '../../../../apiServices/api';
import CardTeam from './components/CardTeam';

const SectionTeam = () => {
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
    <section className='team-area pt-115 pb-55'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-7 col-md-10'>
            <div className='section-title-team pos-rel mb-75'>
              <div className='section-icon'>
                <img className='section-back-icon back-icon-left' src={NurseIcon} />
              </div>
              <div className='section-text pos-rel'>
                <h5 className='heading5'>Our Team</h5>
                <h1 style={{ paddingRight: '20px' }} className='heading1'>
                  A Professional & Care Provider
                </h1>
              </div>
              <div className='section-line pos-rel'>
                <img className='' src={LineTitleTeam} />
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-lg-5'>
            <div className='section-button text-end d-none d-lg-block pt-80 team_btn'>
              <Link className='primary_btn btn-icon ml-0' to='/'>
                <span className='custom-span-plus'>+</span>
                Make Appointment
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
            { 
                data.map((item) => (
                    <CardTeam key={item.id} name={item.name} role={item.role} 
                        avatar={item.id}/>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
