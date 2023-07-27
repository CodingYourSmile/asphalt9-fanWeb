import React from 'react';
import './award.css';

const Award = ({img, title, text}) => {
  return (
    <div className="asphalt__award">
      <div className="asphalt__award-img">
        <img src={img} />
      </div>

      <div className="asphalt__award-content">
        <p className="asphalt__fontbase" >{title}</p>
        <p className="asphalt__fontalt">{text}</p>
      </div>
    </div>
  )
}

export default Award