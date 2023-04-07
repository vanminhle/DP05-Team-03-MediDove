import React, { useState, useEffect } from 'react';
import DentalCareImg from '../../../../img/sectionDentalCare/service-details-thumb1.jpg';
import NurseIcon from '../../../../img/sectionDepartHome/section-back-icon.png';
import LineImg from '../../../../img/sectionTeam/section-title-line.png';
import TeethIcon from '../../../../img/sectionDentalCare/ser-fea-icon-1.png';
import BrainIcon from '../../../../img/sectionDentalCare/ser-fea-icon-2.png'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './dentalCare.css';
import { getChartData } from '../../../../apiServices/api';

const DentalCate = () => {
  const[data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getChartData();
    setData(response);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='dental-care-thumb mb-80'>
        <img className='img-dental' src={DentalCareImg} />
      </div>
      <div className='title-dental-care pos-rel mb-45'>
        <div className='section-icon'>
          <img className='section-back-icon back-icon-left' src={NurseIcon} />
        </div>
        <div className='section-text-dental pos-rel'>
          <h5 className='heading5 green-color text-up-case'>dental care</h5>
          <h1 className='heading1'>We are here to help when you need us.</h1>
        </div>
        <div className='line-icon pos-rel'>
          <img src={LineImg} />
        </div>
      </div>
      <div className='dental-detail-text mb-30'>
        <p className='custom-para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p className='custom-para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
      </div>
      <div className='dental-detail-feature overflow mb-35'>
        <div className='feature-box f-left'>
          <div className='feature-icon f-left'>
            <img src={TeethIcon}/>
          </div>
          <div className='feature-list overflow'>
            <h3 className='heading3'>Personal care</h3>
              <ul className='list-check'>
                <li>
                  <i className='fa fa-check'></i>
                  Cillum dolore eu fugiat nulla.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Consectetur adipisicing elit,
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Sed do eiusmod tempor inci.
                </li>
                
              </ul>
          </div>
        </div>
        <div className='feature-box f-left mr-0'>
          <div className='feature-icon f-left'>
            <img src={BrainIcon}/>
          </div>
          <div className='feature-list overflow'>
            <h3 className='heading3'>Lifestyle support</h3>
              <ul className='list-check'>
                <li>
                  <i className='fa fa-check'></i>
                  Didunt ut labore et dolore magna.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Aliqua. Ut enim ad minim veniam.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Quis nostrud exercitation ullamco.
                </li>
                <li>
                  <i className='fa fa-check'></i>
                  Laboris nisi ut aliquip ex ea.
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div className='dental-chart mb-55'>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DentalCate;
