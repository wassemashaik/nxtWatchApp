import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import {
  NoSavedVideos, 
  SavedVideosRouteContainer,
  Heading,
  Paragraph,
  Banner,
  BannerHead, Icon,Unorder
} from './styledComponents'
import WatchContext from '../../context/WatchContext'
import VideoItem from '../VideoItem'

export default function SavedVideosRoute({mode}) {
  const jwtToken = Cookies.get('jwt_token')
  const navigate = useNavigate()
  
  useEffect(() => {
        if(jwtToken === undefined) {
          navigate('/login')
        }
  }, [navigate, jwtToken])

  return (
    <WatchContext.Consumer>
      {value => {
        const {savedVideoList} = value 
        if (savedVideoList.length >= 1) {
          return(
            <div>
              <Banner>
                <Icon />
                <BannerHead>Saved Videos</BannerHead>
              </Banner>
            <Unorder>
              {savedVideoList.map(eachSavedVideo => (
                <VideoItem key ={eachSavedVideo.id} videoData={eachSavedVideo} />
              ))}
            </Unorder>
            </div>
          ) 
        } 
        return (
          <SavedVideosRouteContainer $mode={mode}>
           <NoSavedVideos alt='no saved videos' src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'  />
              <Heading>No saved videos found</Heading>
              <Paragraph>You can save your videos while watching them</Paragraph>
          </SavedVideosRouteContainer>
        )
            
      }}
    
    </WatchContext.Consumer>
  )
}
