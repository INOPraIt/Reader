import React from 'react';
import './styles.css';

const CardPost = ({ name, firstname, subtopic, topic, message, img }) => {
  return (
    <div className='containerC'>
      <div className='itemC1'>
        <hr className='lineC' />
      </div>
      <div className='itemC2'>
        <div className='block1C'>
          <img 
            className='imgC'
            src='https://phonoteka.org/uploads/posts/2021-07/thumbs/1625650098_56-phonoteka-org-p-sokol-art-krasivo-58.jpg'/>
          <div className='blocNameThemeC'>
            <h5 className='textHeaderC'>{name} {firstname}</h5>
            <p className='commentC'>
              {subtopic}
            </p>
          </div>
        </div>
        <h2 className='headerGenC'>
          {topic}
        </h2>
        <p className='textPostC'>
          {message}
        </p>
      </div>
      <div className='itemC3'>
        <img
          className='imgPostC'
          src={img}
        />
      </div>
    </div>
  )
}


export default CardPost;