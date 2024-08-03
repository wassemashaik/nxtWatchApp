import React, { createContext, useState, useContext } from 'react'

const SavedVideosContext = createContext()

export const SavedVideosProvider =({ children }) => {
  const [savedVideos, setSavedVideos] = useState([])

  const saveVideos = video => {
    setSavedVideos(prevState => [...prevState, video])
  }
  const removeVideos = videoId => {
    setSavedVideos(prevState => prevState.filter(video => !video.id === videoId ))
  }
  const isVideoSaved = (videoId) => {
    return savedVideos.some((video)=> video.id === videoId)
  }

    return (
      <SavedVideosContext.Provider value={{savedVideos, saveVideos, removeVideos, isVideoSaved}}>
        {children}
      </SavedVideosContext.Provider>  
    )
}
export const useSavedVideos = () => useContext(SavedVideosContext)