import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { createPost } from '../../redux/reducers/actions';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import gg from '../../public'

const hostUrl = 'http://localhost:5000/upload';

const CreatePost = (props) => {
  const [name, setName] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [subtopic, setSubtopic] = React.useState('');
  const [topic, setTopic] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [img, setImg] = React.useState('');

  const notify = () => {
    toast("Your post has been successfully added "), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newPost = {
      name,
      firstname,
      subtopic,
      topic,
      message,
      img
    }
    console.log(newPost);

    props.createPost(newPost)
  }

  return (
    <div>
      <div>
        <div className='item1'>
          <div className='blockReader'>
            <Link
              className='linkGen'
              to={'/'}>
              <h1
                className='headerReader'>
                  READER
              </h1>
            </Link>
          </div>
          <hr className='lineReader' />
        </div>
      </div>
      <div>
        <div className='blockOneCP'>
          <form onSubmit={submitHandler}>
            <div className='subBlockOneCP'>
              <div className='avatarChangeCreate'>
                <img
                  className='imgCPd'
                  src='https://phonoteka.org/uploads/posts/2021-07/thumbs/1625650098_56-phonoteka-org-p-sokol-art-krasivo-58.jpg' />
              </div>
              <input
                placeholder='Name'
                className='inpNameCP'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder='Firstname'
                className='inpFirstnameCP'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder='Subtopic'
                className='inpSubtopicPC'
                value={subtopic}
                onChange={(e) => setSubtopic(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder='Topic'
                className='inpTopicCP'
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className='textareaCP'
                placeholder='The meaning of the post'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <input 
                placeholder='Link to your image'
                className='inpLinkCP'
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <button
              className='btnCreatePost'
              type='submit'
              onClick={notify}
            >
              Create
            </button>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark" />
          </form>
        </div>
      </div>
      <div>
        <h2 className='textHeaderOnePC'>This is what your post will look like:</h2>
      </div>
      <div className='containerCP'>
        <div className='itemC1P'>
          <hr className='lineCP' />
        </div>
        <div className='itemC2P'>
          <div className='block1CP'>
            <img
              className='imgCP'
              src='https://phonoteka.org/uploads/posts/2021-07/thumbs/1625650098_56-phonoteka-org-p-sokol-art-krasivo-58.jpg' />
            <div className='blocNameThemeCP'>
              <h5 className='textHeaderCP'>{name} {firstname}</h5>
              <p className='commentCP'>
                {subtopic}
              </p>
            </div>
          </div>
          <h2 className='headerGenCP'>
            {topic}
          </h2>
          <p className='textPostCP'>
            {message}
          </p>
        </div>
        <div className='itemC3P'>
          <img 
            className={'imgPostCP'}
            alt={"img"}
            src={img}
          />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  createPost: createPost
}

export default connect(null, mapDispatchToProps)(CreatePost)