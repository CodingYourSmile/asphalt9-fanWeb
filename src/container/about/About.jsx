import React from 'react';
import Subheading from '../../components/Subheading/Subheading';
import A from '../../assets/Cardash.png';
import './about.css';

const About = () => {
  return (
    <div className="asphalt__about section__padding asphalt__bg" id="about">

      <div className="asphalt__about-img">
        <img src={A} alt="A"/>
      </div>

      <div className="asphalt__about-us">
        <h1 className="asphalt__title">About Us</h1>
        <Subheading/>
        <p className="asphalt__fontalt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="asphalt__button">Know More</button>
      </div>

      <div className="asphalt__about-div"></div>

      <div className="asphalt__about-history">
        <h1 className="asphalt__title">Our History</h1>
        <Subheading/>
        <p className="asphalt__fontalt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button className="asphalt__button">Know More</button>
      </div>

    </div>
  )
}

export default About