import React from "react";
import "./MoreService.css";

const MoreService = () => {
  return (
    <div className='col-xl-5 col-lg-4'>
      <div className="more-service-widget">
        <div className="widget-title-box">
          <h3 className="widget-title">More Services</h3>
        </div>
        <div className="more-service-list">
          <ul className="ul-more-service">
            <li>
              <a href="/department">
                <div className="more-service-icon">
                  <img src="https://medi-dove.netlify.app/img/services/more-ser-1.png"
                  alt="" />
                </div>
                <div className="more-service-title">
                  Body Surgery
                </div>
              </a>
            </li>
            <li>
              <a href="/department">
                <div className="more-service-icon">
                  <img src="https://medi-dove.netlify.app/img/services/more-ser-2.png"
                  alt="" />
                </div>
                <div className="more-service-title">
                  Dental Care
                </div>
              </a>
            </li>
            <li>
              <a href="/department">
                <div className="more-service-icon">
                  <img src="https://medi-dove.netlify.app/img/services/more-ser-3.png"
                  alt="" />
                </div>
                <div className="more-service-title">
                  Eye Care
                </div>
              </a>
            </li>
            <li>
              <a href="/department">
                <div className="more-service-icon">
                  <img src="https://medi-dove.netlify.app/img/services/more-ser-4.png"
                  alt="" />
                </div>
                <div className="more-service-title">
                    Blood cancer
                </div>
              </a>
            </li>
            <li>
              <a href="/department">
                <div className="more-service-icon">
                  <img src="https://medi-dove.netlify.app/img/services/more-ser-5.png"
                  alt="" />
                </div>
                <div className="more-service-title">
                  Neurology Sargery
                </div>
              </a>
            </li>
            <li>
              <a href="/department">
                <div className="more-service-icon">
                  <img src="https://medi-dove.netlify.app/img/services/more-ser-6.png"
                  alt="" />
                </div>
                <div className="more-service-title">
                    Allergic Issue
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="more-service-widget">
        <div className="widget-title-box">
          <h3 className="widget-title">Get Some Advice?</h3>
        </div>
        <form className="service-contact-form" action="">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-input">
                <input type="text" 
                       placeholder="Enter your name"/>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-input">
                <input type="text" 
                       placeholder="Enter your email"/>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="contact-input">
                <select className="form-select select-style"
                        aria-label="Default select example">
                          <option>Select type of care</option>
                          <option>Select type of care</option>
                          <option>Select type of care</option>
                          <option>Select type of care</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <div className="service-form-btn">
          <a href="#" className="btn-primary">
            <span>+</span>
            Request for call
          </a>
        </div>
      </div>

      <div className="more-service-widget img-widget">
        <div className="banner-widget">
          <a href="#">
            <img src="https://medi-dove.netlify.app/img/services/services-banner.png" alt="" />
          </a>
        </div>
      </div>

    </div>

  );
};

export default MoreService;
