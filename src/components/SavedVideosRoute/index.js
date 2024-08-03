import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useSavedVideos } from '../SavedVideosContext'
import {
  NoSavedVideos, 
  SavedVideosRouteContainer,
  Heading,
  Paragraph,
} from './styledComponents'

export default function SavedVideosRoute({mode}) {
  const jwtToken = Cookies.get('jwt_token')
  const navigate = useNavigate()
  const {savedVideo} = useSavedVideos()

  useEffect(() => {
        if(jwtToken === undefined) {
          navigate('/login')
        }
  }, [navigate, jwtToken])
  
  return (
    <SavedVideosRouteContainer $mode={mode}>
      {savedVideo.length === 0 ? 
      (
        <>
        <NoSavedVideos alt='no saved videos' src=
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'  
      />
      <Heading>No saved videos found</Heading>
      <Paragraph>You can save your videos while watching them</Paragraph>
        </>
      ) : (
        <div>
          {savedVideo.map((video) => (
            <div key={video.id}>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      )
}  
      
    </SavedVideosRouteContainer>
  )
}
