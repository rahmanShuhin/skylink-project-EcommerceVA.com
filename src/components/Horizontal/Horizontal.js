import React from 'react';
import arrow from '../../../src/images/arrow-down-orange.png'

const Horizontal = () => {
  return (
    <div className="horizontal__line">
      <hr className="_hr"></hr>
      <img src={arrow} alt="" className="img-fluid" />
    </div>
  );
};

export default Horizontal;