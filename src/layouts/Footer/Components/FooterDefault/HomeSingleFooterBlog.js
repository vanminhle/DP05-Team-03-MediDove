import React from 'react';
import { Link } from 'react-router-dom';
import BlogImagesOne from './../../../../../src/assets/images/blog/feeds-thumb-1.jpg';
import BlogImagesTwo from './../../../../../src/assets/images/blog/feeds-thumb-2.jpg';
import BlogImagesThree from './../../../../../src/assets/images/blog/feeds-thumb-3.jpg';

const HomeSingleFooterBlog = ({ image }) => {
  return (
    <>
      <div className='single-blog-feeds mb-3'>
        <div className='blog-feeds-thumb'>
          <Link to='/blogDetails'>
            {image == 1 && <img src={BlogImagesOne} alt='' />}
            {image == 2 && <img src={BlogImagesTwo} alt='' />}
            {image == 3 && <img src={BlogImagesThree} alt='' />}
          </Link>
        </div>
        <div className='blog-feeds-text'>
          <h5>
            <Link to='/blogDetails'>Lorem ipsum dolor sit am et, consectetur.</Link>
          </h5>
          <span className='feeds-date'>14 Feb 2022</span>
        </div>
      </div>
    </>
  );
};

export default HomeSingleFooterBlog;
