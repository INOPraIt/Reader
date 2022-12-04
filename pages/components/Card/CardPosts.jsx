import React from 'react';
import { connect } from 'react-redux';
import CardPost from './CardPost';


const CardPosts = ({ syncPosts }) => {
  return syncPosts.map(post => 
  <CardPost 
    name={post.name} 
    firstname={post.firstname}
    subtopic={post.subtopic}
    topic={post.topic}
    message={post.message}
    img={post.img}
    key={post.id}
  />
)}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(CardPosts);
