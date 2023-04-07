import React from 'react';
import './quoteCalculator.css';

export const QuoteCalculator = () => {
  return (
    <div>
      <div className='container quoteCal'>
        <div className='row'>
          <div className='col-lg-6 contentLeft'>
            <div className='quoteContent'>
              <h5 className='quoteH5'>Make a call</h5>
              <h1 className='quoteH1'>Quote Calculator</h1>
              <p className='quoteBody'>
                If you require services on a public holiday, overnight services or live-in services,
                please call (+00)888.666.88 so we can discuss prices with you.
              </p>
            </div>
            <button type='button' className='btn btn-primary sectionBtn'>
              <a href='#'>make appointment</a>
              <span>+</span>
            </button>
          </div>
          <div className='col-lg-6 contentRight'>
            <form className='quoteForm'>
              <div className='select'>
                <select className='form-select formItem' aria-label='Default select example'>
                  <option defaultValue>When would you like our support?</option>
                  <option value='1'>When would you like our support?</option>
                </select>
                <select className='form-select formItem' aria-label='Default select example'>
                  <option defaultValue>When would you like us arrive?</option>
                  <option value='1'>When would you like our support?</option>
                </select>
                <select className='form-select formItem' aria-label='Default select example'>
                  <option defaultValue>How long should we stay?</option>
                  <option value='1'>One</option>
                </select>
                <select className='form-select formItem' aria-label='Default select example'>
                  <option defaultValue>Where are you located?</option>
                  <option value='1'>One</option>
                </select>
                <div className='input-group mb-3 formItem'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Phone Number'
                    aria-describedby='basic-addon1'
                  />
                  <span className='input-group-text' id='basic-addon1'>
                    <i className='fa-solid fa-phone-flip'></i>
                  </span>
                </div>
              </div>
            </form>
            <div className='formBtn'>
              <a className='btn btn-primary submitBtn' type='button' href='/department'>
                <a>submit query</a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
