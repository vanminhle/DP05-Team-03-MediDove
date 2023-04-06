import React from "react";
import "./MoreService.css";

const MoreService = () => {
  return (
    <div className="more-service-widget">
      <div className="widget-title-box">
        <h3 className="widget-title">More Services</h3>
      </div>
      <div className="more-service-list">
        <ul>
          <li>
            <a href="#">
              <div className="more-service-icon"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoreService;
