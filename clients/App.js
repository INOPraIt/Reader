import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost/CreatePost';
import Home from './pages/Home/Home';


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<CreatePost />}/>
      </Routes>
  )
}

export default App;
