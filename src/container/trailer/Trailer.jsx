import React, {useState, useRef} from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import trailer from '../../assets/trailer.mp4'
import './trailer.css';

const Trailer = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo( (prevPlayVideo) => !prevPlayVideo );
    
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="asphalt__trailer">
      <video
        src={trailer}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>

      <div className="asphalt__trailer-overlay">
        <div className="asphalt__trailer-overlay_circle" onClick={ handleVideo }>
          {
            playVideo ?
            <BsPauseFill color="#FFF" size={30} /> :
            <BsFillPlayFill color="#FFF" size={30}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Trailer