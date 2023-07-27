import React from 'react';
import Subheading from '../../components/Subheading/Subheading';
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <div className="asphalt__footer section__padding asphalt__bg">

      <div className="asphalt__footer-newsletter">
        <Subheading title="Newsletter"/>
        <h1 className="asphalt__title">Subscribe To Our Newsletter</h1>
        <p className="asphalt__fontalt">And never miss latest Updates!</p>

        <div className="asphalt__footer-subscribe">
          <input className="asphalt__fontalt" type="email" placeholder="Email Address"/>
          <button className="asphalt__button" type="button">Subscribe</button>
        </div>
      </div>

      <div className="asphalt__footer-details">

        <div className="asphalt__footer-details_contactus">
          <h2 className="asphalt__fontbase">Contact Us</h2>
          <p className="asphalt__fontalt">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="asphalt__fontalt">+1 212-344-1230</p>
          <p className="asphalt__fontalt">+1 212-555-1230</p>
        </div>
         
        <div className="asphalt__footer-details_title">
          <h1 className="asphalt__title">Asphalt 9</h1>
          <p className="asphalt__fontalt">"The best way to find yourself is to lose yourself in the power of motors.”</p>
          <Subheading/>
          <div>
            <BsFacebook className="asphalt__footer-icons"/>
            <BsTwitter className="asphalt__footer-icons"/>
            <BsInstagram className="asphalt__footer-icons"/>      
          </div>
        </div>

        <div className="asphalt__footer-details_hours">
          <h2 className="asphalt__fontbase">Working Hours</h2>
          <p className="asphalt__fontalt">Monday-Friday:</p>
          <p className="asphalt__fontalt">08:00 am - 12:00 am</p>
          <p className="asphalt__fontalt">Saturday-Sunday:</p>
          <p className="asphalt__fontalt">07:00 am - 11:00 pm</p>
        </div>

      </div>
      
      <div className="asphalt__footer-copyright">
        <p className="asphalt__fontalt">2023 Asphalt 9. All Rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer