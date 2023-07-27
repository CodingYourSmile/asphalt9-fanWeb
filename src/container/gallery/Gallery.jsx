import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './gallery.css';

import { SubHeading } from '../../components';
import gallery01 from '../../assets/gallery01.jpg';
import gallery02 from '../../assets/gallery02.jpg';
import gallery03 from '../../assets/gallery03.jpg';
import gallery04 from '../../assets/gallery04.jpg';

const galleryImages = [gallery01, gallery02, gallery03, gallery04];

const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
      const { current } = scrollRef;

      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
  }

  return (
    <div className="asphalt__gallery">
      <div className="asphalt__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="asphalt__title">Photo Gallery</h1>
        <p className="asphalt__fontalt" style={ {marginTop: '2rem'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="asphalt__button">View More</button>
      </div>
      
      <div className="asphalt__gallery-images">
        <div className="asphalt__gallery-images_container" ref={scrollRef}>
          {
            galleryImages.map( (image, index) => (
              <div className="asphalt__gallery-images_card" key={ `gallery_image-${index+1}`}>
                <img src={image} alt="gallery-image"/>
                <BsInstagram className="asphalt__image-icon" />
              </div>
            ) ) 
          }
        </div>
        <div className="asphalt__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={ () => scroll('left') } />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={ () => scroll('right') } />
        </div>

      </div>

    </div>
  )
}

export default Gallery