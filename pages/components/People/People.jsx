import React from 'react';
import './style.css';

export default function People() {
  return (
    <div className='generalContainerPeople'>
      <div>
        <img
          className='peopleMostPost'
          src='https://phonoteka.org/uploads/posts/2021-07/thumbs/1625650098_56-phonoteka-org-p-sokol-art-krasivo-58.jpg'
        />
      </div>
      <div className='blockP'>
        <h4 className='textNameP'>Chintan bhatt</h4>
        <p className='textThemeP'>The founder & chesif desinger at YourUXTeam</p>
      </div>
    </div>
  )
}
