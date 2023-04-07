import React from 'react';
import { Link } from 'react-router-dom';

const CardTeam = ({ name, role, avatar, checkedPage }) => {
  return (
    <>
      <div className='col-xl-4 col-lg-4 col-md-6'>
        <div className='team-box text-center mb-60'>
          <div className='team-thumb mb-45 pos-rel'>
            <img src={checkedPage ? require(`../../../../../img/sectionTeam/avatar/member${avatar}.png`): 
                      require(`../../../../../img/doctor/member${avatar}.png`)} />
            <Link className='team-link'>+</Link>
          </div>
          <div className='team-content'>
            <h3 className='heading3'>{name}</h3>
            <h6 className='heading6'>{role}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeam;
