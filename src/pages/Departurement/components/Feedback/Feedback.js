import React from 'react'
import './Feedback.css'
const Feedback = () => {
  return (
    <div className="testi-box">
        <div className="testi-content">
            <div className="testi-quato-icon">
                <img src="https://medi-dove.netlify.app/img/testimonials/testi-quato-icon.png" alt="" />
            </div>
            <p>
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <span></span>
        </div>
        <div className="testi-author">
            <h2 className="testi-author-title"> Rosalina D. Williamson </h2>
            <span className="testi-author-desination">founder, uithemes</span>
        </div>
        <div className="test-author-icon">
            <img src="https://medi-dove.netlify.app/img/testimonials/testi-author-icon.png" alt="" />
        </div>
    </div>
  )
}

export default Feedback