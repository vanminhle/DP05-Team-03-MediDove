import React from 'react';

import './ourPlan.css';

import { useEffect, useState } from 'react';
import { getPlans } from '../../../../apiServices/api';

const OurPlan = () => {

    const [data, setData] = useState([]);

    console.log(data);
    const fetchData = async () => {
      const response = await getPlans();
      setData(response);
      return response;
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <section className='pricing-area'>
      <div className='container'>
        <div className="row">

          <div className='col-xl-5 col-lg-6 col-md-12'>

            <div className='section-ourPlan-title'>
              <div className='section-ourPlan-icons'>
                <img
                  className='section-ourPlan-back-icon back-icon-left'
                  src='https://medi-dove.netlify.app/img/section/section-back-icon.png'
                  alt='section-ourPlan-back-icon'
                />
              </div>

              <div className="section-ourPlan-text">
                <h5>Our Plan</h5>
                <h1>Pricing & Plans</h1>
              </div>

              <div className="section-ourPlan-line">
                <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png"
                     alt="section-line"/>
              </div>
            </div>

          </div>

          <div className="col-xl-7 col-lg-6 col-md-12">

            <div className="pricing-menu">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <button class="nav-link active"
                         id="pills-home-tab"
                         data-bs-toggle="tab"
                         data-bs-target="#pills-home"
                         data-toggle="pill"
                         role="tab"
                         aria-controls="pills-home" 
                         aria-selected="true">monthly</button>
                    </li>
                    <li className="nav-item">
                    <button class="nav-link"
                     id="pills-profile-tab"
                     data-bs-toggle="tab" 
                     data-toggle="pill"
                     data-bs-target="#pills-profile" 
                     role="tab" aria-controls="pills-profile" 
                     aria-selected="false">yearly</button>
                    </li>
                </ul>
            </div>

          </div>


        </div>

        <div className="row">
            <div className="col-xl-12">
                <div className="tab-content" id="pills-tabContent">

                    <div className="tab-pane active"
                     id="pills-home"
                     role="tabpanel"
                     aria-labelledby="pills-home-tab">
                        <div className="row">
                            {data.slice(0, 3).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className="pricing-box">
                                    <div className="pricing-thumb">
                                        <img src={require(`../../../../img/ourPlan/ourPlan${item.id}.png`)}/>
                                    </div>
                                    <div className="pricing-content">
                                        <h1>{item.title}</h1>
                                        <p>
                                            {item.body}
                                        </p>
                                        <a className="primary_btn btn-icon ml-0">
                                            <span>+</span>
                                            {item.price}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            ))}
                            
                        </div>
                    </div>

                    <div className="tab-pane"
                     id="pills-profile"
                     role="tabpanel"
                     aria-labelledby="pills-home-tab">
                        <div className="row">

                        {data.splice(data.length/2, data.length/2).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                              console.log(item.id)
                                {console.log(item.id)}
                                <div className="pricing-box">
                                    <div className="pricing-thumb">
                                        <img src={require(`../../../../img/ourPlan/ourPlan${(item.id)}.png`)}/>
                                    </div>
                                    <div className="pricing-content">
                                        <h1>{item.title}</h1>
                                        <p>
                                            {item.body}
                                        </p>
                                        <a className="primary_btn btn-icon ml-0">
                                            <span>+</span>
                                            {item.price}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlan;
