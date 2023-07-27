import React from 'react';
import welcome from '../../assets/welcome.png';
import Subheading from '../../components/Subheading/Subheading';
import './header.css';


const Header = () => {
  return (
    <div className="asphalt__header section__padding" id="home">
      <div className="asphalt__header-content">
        <Subheading title="Pursuit emotion"/>
        <h1 className="asphalt__title">The Game To Enjoy Speed</h1>
        <p className="asphalt__fontalt">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <button className="asphalt__button" type="button">Explore Cars</button>
      </div>

      <div className="asphalt__header-img">
        <img src={ welcome } alt="welcome"></img>
      </div>
    </div>
  )
}

export default Header