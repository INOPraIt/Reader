import React from 'react';
import './styles.css';
import { deletePost } from '../../../redux/actions/post.action';
import {connect} from 'react-redux';

const CardPost = ({ name, firstname, subtopic, topic, message, img, id, deletePost }) => {

  const submitHandler = ( event ) => {
    event.preventDefault();
    deletePost(id);
  }

  return (
    <div className='containerC'>
      <div className='itemC1'>
        <hr className='lineC' />
      </div>
      <div className='itemC2'>
        <div className='block1C'>
          <img
            className='imgC'
            src='https://phonoteka.org/uploads/posts/2021-07/thumbs/1625650098_56-phonoteka-org-p-sokol-art-krasivo-58.jpg' />
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
        <form
          className='btnBlockCardPost'
          onSubmit={submitHandler}
        >
          <button
            className='editorCardPost'
          >
            Редактировать
          </button>
          <button
            className='deletingCardPost'
            type='submit'
          >
            Удалить
          </button>
        </form>
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

const mapDispatchToProps = {
  deletePost: deletePost
}

export default connect(null, mapDispatchToProps)(CardPost);
