import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Oval } from 'react-loader-spinner'
import { formatDistanceToNow} from 'date-fns'
import { AiOutlineDislike } from "react-icons/ai";
import { CgPlayListAdd } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { useSavedVideos } from '../SavedVideosContext'
import { 
  RetryBtn,
  LikeBtn,
  LoaderContainer,
  VideoItemDetailsContainer,
  Title,
  ViewContainer,
  Para,
  ChannelContainer,
  LikeContainer,
  Channel,
  Profile,
  ChannelName,
  IbCricket,
  Description,
  Godot
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE'
}

export default function VideoItemDetails({mode, toggleMode}) {
  const [videoDetails, setVideoDetails] = useState({})
  const navigate = useNavigate()
  const [apiStatus, setApiStatus] = useState({apiStatus: apiStatusConstants.initial})
  const jwtToken = Cookies.get('jwt_token')
  const {id} = useParams()
  const [activeBtn, setActiveBtn] = useState('')
  const {saveVideo, removeVideos, isVideoSaved} = useSavedVideos()

  const activeLikeBtn = ()=> {
    setActiveBtn(prevState => (prevState === 'like'? '': 'like'))
  }

  const activeDisLikeBtn = ()=> {
    setActiveBtn(prevState => (prevState === 'dislike'? '': 'dislike'))
  }
  useEffect(() => {
      
      if(jwtToken === undefined) {
        navigate('/login')
      }else {
        getVideoItemDetails()
      }
    }, [navigate, jwtToken])

    const handlesaveVideo = ()=> {
      if (isVideoSaved(videoDetails.id)){
        removeVideos(videoDetails.id)
      }else {
        saveVideo(videoDetails)
      }
    }
  const getVideoItemDetails = async() => {
    setApiStatus(apiStatusConstants.inProgress)
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok===true){
      const updateData = {
        id: data.video_details.id,
        subscriberCount: data.video_details.channel.subscriber_count,        
        title: data.video_details.title,
        publishedAt: data.video_details.published_at,
        imageUrl: data.video_details.image_url,
        viewCount: data.video_details.view_count,
        profileImageUrl: data.video_details.channel.profile_image_url,
        videoUrl: data.video_details.video_url,
        name: data.video_details.channel.name,
        description: data.video_details.description
      }
      setVideoDetails(updateData)
      setApiStatus(apiStatusConstants.success)
    }else {
      setApiStatus(apiStatusConstants.failure)
      console.log(data.error_msg)
    }
  }    

  const renderVideoDetails = ()=> {
    if (!videoDetails) return null
    const { title, viewCount,publishedAt, profileImageUrl, videoUrl,subscriberCount,description, name} = videoDetails
    const formattedDate = formatDistanceToNow((new Date(publishedAt)))
    const isSaved = isVideoSaved(videoDetails.id)
    return (
          <div>
          <ReactPlayer url={videoUrl} controls={true}/>
            <div>
              <Title>{title}</Title>
              <ChannelContainer>
              <ViewContainer>
              <Para >{viewCount} Views</Para>
              <Para><Godot />{formattedDate}</Para>
              </ViewContainer>
              <LikeContainer>
                <LikeBtn type='button' label="Like" isactive={activeBtn==='like'} onClick={activeLikeBtn}><AiOutlineLike /> Like</LikeBtn>
                <LikeBtn type='button' label="Dislike" isactive={activeBtn==='dislike'} onClick={activeDisLikeBtn}><AiOutlineDislike /> Dislike</LikeBtn>
                <LikeBtn type='button' onClick={handlesaveVideo}><CgPlayListAdd />{isSaved ? 'saved': 'save'}</LikeBtn>
              </LikeContainer>
              </ChannelContainer>
              <Channel> 
              <Profile src={profileImageUrl}/>
              <ChannelName>
              <IbCricket>{name}</IbCricket>
              <IbCricket>{subscriberCount}</IbCricket>
              </ChannelName>
              </Channel>
              <Description>
                <para>{description}</para>   
              </Description>    
          
            </div>
          </div>
        )
  }

  const renderFailureView = ()=> {
    return (
      <div className='failure-cotntainer'>
        <img className='failure-image' alt="failure view"
         src={mode==='light' ?'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'}/>
        <h1 className='heading'>Oops! Something Went Wrong</h1>
        <p >We are having some trouble to complete your request.</p>
        <p>Please try Again.</p>
        <RetryBtn onClick={getVideoItemDetails}>Retry</RetryBtn>
      </div>
    )
  }

  const renderLoadingView = ()=> {
    return(
    <LoaderContainer  data-testid="loader">
      <Oval visible={true}
        height="80"
        width="80"
        color="#180c42"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass="" />
    </LoaderContainer>
    )
  }

  const renderAll=() => {
    switch(apiStatus){
      case apiStatusConstants.success:
        return renderVideoDetails()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default: 
        return null      
    }
  }
  return (
    <VideoItemDetailsContainer $mode={mode}>
      {renderAll()}
    </VideoItemDetailsContainer>
  )
}
