import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import HomeRoute from './components/HomeRoute';
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFoundRoute';

import './App.css';
import Gaming from './components/Gaming';
import Home from './components/Home';
import {savedVideos} from './components/SavedVideosContext'
import Trending from './components/Trending';
import VideoItemDetails from './components/VideoItemDetails';

const App = ({mode}) => {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/login" element={<LoginForm/>} />
        <Route exact path="/" element={<HomeRoute/>}>
          <Route index element={<Home/>} />
          <Route path='/videos/:id' element={<VideoItemDetails mode={mode}/>}/>
          <Route path="/gaming"element={<Gaming/>}/>
          <Route exact path="/trending" element={<Trending/>}/>
          {/* <Route path="/saved-videos"element={</>}/> */}
          <Route exact path="/not-found" element={<NotFound mode={mode}/>}/>
          <Route exact path="*" element={<Navigate to="/not-found" />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
