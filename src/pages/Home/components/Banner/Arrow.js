import React, { useCallback } from 'react';

export const Arrow = (props) => {
  const { className, style, onClick, direction } = props;

  return (
    <div
      className={`${className} slick-arrowaction ${
        direction === 'left' ? 'slick-arr-left' : 'slick-arr-right'
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span className={`${direction === 'left' ? 'ic-left' : 'ic-right'}`}></span>
    </div>
  );
};
