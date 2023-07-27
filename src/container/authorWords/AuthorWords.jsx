import React from 'react';
import './authorWords.css';

import author from '../../assets/author.png';
import quote from '../../assets/quote.png';
import signature from '../../assets/sign.png';
import Subheading from '../../components/Subheading/Subheading';

const AuthorWords = () => {
  return (
    <div className="asphalt__author section__padding" id="author">
      <div className="asphalt__author-img">
        <img src={author} alt="author"/>
      </div>

      <div className="asphalt__author-words">
        <div className="asphalt__author-words_title">
          <Subheading title="Author's Word"/>
          <h1 className="asphalt__title">What We Belive In</h1>
        </div>
        <div className="asphalt__author-words_text">
          <p className="asphalt__fontalt">
            <img style={ {marginRight: "8px"} } width="30px" src={quote} alt="quote"/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
        </div>
        <div className="asphalt__author-words_signature">
          <p className="asphalt__fontbase">Miguel González</p>
          <p className="asphalt__fontalt">CEO & Founder</p>
        </div>
        <img width="80%" src={signature} alt="signature"/>
      </div>
    </div>
  )
}

export default AuthorWords