import React from 'react';
import CountUp from 'react-countup';
import './style.css';

export const ItemCount = ({ icon, counter, title }) => {
  return (
    <>
      <div className='col-lg-4 col-md-6'>
        <div className='single-counter'>
          <img src={require(`../../../../../img/itemCount/counter-icon-${icon}.png`)} alt='' />
          <div className='counter-text-box'>
            <h1>
              <span className='counter'>
                <CountUp end={counter} duration={8} />
              </span>
              +
            </h1>
            <h3>{title}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
