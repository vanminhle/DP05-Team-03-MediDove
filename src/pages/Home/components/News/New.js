import React from 'react'
import './New.css'

const New = () => {
  return (
    <section className="latest-news-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-7">
                    <div className="section-new-title">
                        <div className="section-new-icon">
                            <img className="section-back-icon"
                             src="https://medi-dove.netlify.app/img/section/section-back-icon.png"/>
                        </div>

                        <div className="section-new-text">
                            <h5>News</h5>
                            <h1>Get Every Single Updates Here.</h1>
                        </div>

                        <div className="section-new-inline">
                            <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png" />
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-5">
                    <div className="section-new-button">
                        <a className="btn-new-icon">
                            <span>+</span>
                            our blog
                        </a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="latest-news-box">

                        <div className="latest-news-thumb">
                            <img src="https://medi-dove.netlify.app/img/blog/blog-thumb-1.jpg" />
                        </div>

                        <div className="latest-news-content">
                            <div className="news-meta">
                                <span>
                                    <a className="news-tag" href="#">Medical,</a>
                                </span>
                                <span>
                                    <a class="news-tag" href="#">Medicine</a>
                                </span>
                            </div>

                            <h3>
                                <a href="#">
                                    Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
                                </a>
                            </h3>

                            <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. 
                            Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="latest-news-box">

                        <div className="latest-news-thumb">
                            <img src="https://medi-dove.netlify.app/img/blog/blog-thumb-1.jpg" />
                        </div>

                        <div className="latest-news-content">
                            <div className="news-meta">
                                <span>
                                    <a className="news-tag" href="#">Medical,</a>
                                </span>
                                <span>
                                    <a class="news-tag" href="#">Medicine</a>
                                </span>
                            </div>

                            <h3>
                                <a href="#">
                                    Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
                                </a>
                            </h3>

                            <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. 
                            Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-12 col-md-12">

                    <div className="recent-news-list">
                        <div className="latest-news-content">
                            <h3>
                                <a href="#">Lorem ipsum dolor sit amet, consectetur adidis.</a>
                            </h3>

                            <span className="meta-date">
                                <i class="far fa-calendar"></i>
                                23rd Jan 2022
                            </span>
                            <span className="meta-date">
                                <i className="far fa-calendar"></i>
                                33 Comments
                            </span>
                        </div>

                        <div className="latest-news-content">
                            <h3>
                                <a href="#">Lorem ipsum dolor sit amet, consectetur adidis.</a>
                            </h3>

                            <span className="meta-date">
                                <i className="far fa-calendar"></i>
                                23rd Jan 2022
                            </span>
                            <span className="meta-date">
                                <i className="far fa-calendar"></i>
                                33 Comments
                            </span>
                        </div>

                        <div className="latest-news-content">
                            <h3>
                                <a href="#">Lorem ipsum dolor sit amet, consectetur adidis.</a>
                            </h3>

                            <span className="meta-date">
                                <i className="far fa-calendar"></i>
                                23rd Jan 2022
                            </span>
                            <span className="meta-date">
                                <i className="far fa-calendar"></i>
                                33 Comments
                            </span>
                        </div>
                    </div>

                    <div className="mk-call-btn">
                        <a className="btn-call-green">
                            <span>
                                <i></i>
                            </span>
                            make call
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default New