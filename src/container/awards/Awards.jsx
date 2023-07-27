import React from 'react';
import './awards.css';

import Subheading from '../../components/Subheading/Subheading';
import { Award } from '../../components';
import award1 from '../../assets/award01.png';
import award2 from '../../assets/award02.png';
import award3 from '../../assets/award03.png';
import award5 from '../../assets/award05.png';
import menu from '../../assets/menu.jpg';

const Awards = () => {
  return (
    <div className="asphalt__awards section__padding asphalt__bg" id="awards">
      <div className="asphalt__awards-content">

        <div className="asphalt__awards-content_title">
          <Subheading title="Awards & Recognitions"/>
          <h1 className="asphalt__title" >Our Game Rating</h1>
        </div>

        <div className="asphalt__awards-content_awards">
          <div>
            <Award img={award2} title="Best Experience" text="Lorem ipsum dolor sit amet, consectetur."/>
            <Award img={award1} title="Rising Star" text="Lorem ipsum dolor sit amet, consectetur."/>
          </div>
          <div>
            <Award img={award5} title="AAA Title" text="Lorem ipsum dolor sit amet, consectetur."/>
            <Award img={award3} title="Outstanding" text="Lorem ipsum dolor sit amet, consectetur."/>
          </div>
        </div>

      </div>  

      <div className="asphalt__awards-img">
        <img src={menu} alt="menu"/>
      </div>

    </div>
  )
}

export default Awards