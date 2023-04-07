import React from 'react';
import Slider from 'react-slick';
import '../../styles/Banner.css';
import { Arrow } from './\bArrow';
import VideoPopup from '../../../../components/common/VideoPopUp/VideoPopUp'
import useGlobalContext from '../../../../hooks/useContextGlobal'

export default function Banner() {
  const popupValue = useGlobalContext();

  const settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <Arrow direction='right' />,
    prevArrow: <Arrow direction='left' />,
    swipe: true,
    responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
         }
      }
   ]
  };
  return (
    <>
      <VideoPopup videoId="oU_GUAWz52w"/>
      <section className='hero-slide-area'>
        <Slider {...settings}>
          <div className='sliderres slider-1  d-flex align-items-center sliderres'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-6 col-lg-8 col-md-10'>
                  <div className='hero-text'>
                    <div className='hero-slide-caption'>
                      <h5>We are here for your care.</h5>
                      <h1>Best Care & Better Doctor.</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className={`hero-slider-btn`}>
                      <a className='primary_btn btn-icon ml-0'>
                        <span>+</span>
                        Make Appointment
                      </a>
                      <button className='play-btn popup-video' onClick={() => popupValue.setIsOpen(true)}>
                        <i class='fas fa-play'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sliderres slider-2 sliderres d-flex align-items-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-6 col-lg-8 col-md-10'>
                  <div className='hero-text'>
                    <div className='hero-slide-caption'>
                      <h5>We are here for your care.</h5>
                      <h1>Best Care & Better Doctor.</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className={`hero-slider-btn`}>
                      <a className='primary_btn btn-icon ml-0'>
                        <span>+</span>
                        Make Appointment
                      </a>
                      <button className='play-btn popup-video' onClick={() => popupValue.setIsOpen(true)}>
                        <i class='fas fa-play'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
