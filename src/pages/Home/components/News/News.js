import React from 'react';
import './News.css';
import { useEffect, useState } from 'react';
import { getNewsAndFeeds } from '../../../../apiServices/api';

const New = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getNewsAndFeeds();
    setData(response);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='latest-news-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-7'>
            <div className='section-new-title'>
              <div className='section-new-icon'>
                <img
                  className='section-back-icon'
                  src='https://medi-dove.netlify.app/img/section/section-back-icon.png'
                  alt=''
                />
              </div>

              <div className='section-new-text'>
                <h5>News</h5>
                <h1>Get Every Single Updates Here.</h1>
              </div>

              <div className='section-new-inline'>
                <img src='https://medi-dove.netlify.app/img/shape/section-title-line.png' alt='' />
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-lg-5'>
            <div className='section-new-button'>
              <a href="/" className='btn-new-icon'>
                <span>+</span>
                our blog
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          {data.slice(0, 2).map((items) => (
            <div className='col-xl-4 col-lg-6 col-md-6' key={items.id}>
              <div className='latest-news-box'>
                <div className='latest-news-thumb'>
                  <img src={require(`../../../../img/News/new${items.id}.jpg`)} alt='' />
                </div>
                <div className='latest-news-content'>
                  <div className='news-meta'>
                    <span>
                      <a className='news-tag' href='/'>
                        {items.content}
                      </a>
                    </span>
                    <span>
                      <a class='news-tag' href='/'>
                        {items.topic}
                      </a>
                    </span>
                  </div>
                  <h3>
                    <a href='/'>{items.title}</a>
                  </h3>
                  <p>{items.body}</p>
                </div>
              </div>
            </div>
          ))}
          <div className='col-xl-4 col-lg-12 col-md-12'>
            <div className='recent-news-list'>
              {data.slice(2, 5).map((items) => (
                <div className='latest-news-content' key={items.id}>
                  <h3>
                    <a href='/'>Lorem ipsum dolor sit amet, consectetur adidis.</a>
                  </h3>
                  <span className='meta-date'>
                    <i className={items.calendaIcon}></i>
                    23rd Jan 2022
                  </span>
                  <span className='meta-date'>
                    <i className={items.commentIcon}></i>
                    33 Comments
                  </span>
                </div>
              ))}
            </div>
            <div className='mk-call-btn'>
              <a href="/" className='btn-call-green'>
                <span>
                  <i className='fas fa-phone'></i>
                </span>
                make call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
