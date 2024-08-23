import React, { useState } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

import HomeRoute from './components/HomeRoute';
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFoundRoute';

import './App.css';
import Gaming from './components/Gaming';
import Home from './components/Home';
import Trending from './components/Trending';
import VideoItemDetails from './components/VideoItemDetails';
import SavedVideosRoute from './components/SavedVideosRoute';
import WatchContext from './context/WatchContext';

const App = ({mode}) => {
  const [savedVideoList, setSavedVideoList] = useState([])
  const  [isDarkTheme, setIsDarkTheme]= useState(false)

  const toggleTheme = ()=>{
    setIsDarkTheme(prevState=>[!prevState])
  }

  const addVideo = (video)=>{
    setSavedVideoList(prevState => [...prevState, video])  
  }
  const removeVideo = (videoId)=>{
    setSavedVideoList(prevState => prevState.filter((video) => video.id != videoId))
  }
  
  return (
    <BrowserRouter>
      <WatchContext.Provider 
       value = {{
        isDarkTheme,
        toggleTheme: toggleTheme,
        savedVideoList,
        addVideo: addVideo,
        removeVideo:removeVideo
       }}
      >
      <Routes>
        <Route exact path="/login" element={<LoginForm/>} />
        <Route exact path="/" element={<HomeRoute/>}>
          <Route index element={<Home/>} />
          <Route path='/videos/:id' element={<VideoItemDetails mode={mode}/>}/>
          <Route path="/gaming"element={<Gaming/>}/>
          <Route exact path="/trending" element={<Trending/>}/>
          <Route path="/saved-videos"element={<SavedVideosRoute/>}/>
          <Route  element={<NotFound mode={mode}/>}/>
          <Route exact path="*" element={<Navigate to="/not-found" />}/>
        </Route>
        
      </Routes>
      </WatchContext.Provider>
    </BrowserRouter>
  )
}

export default App;
