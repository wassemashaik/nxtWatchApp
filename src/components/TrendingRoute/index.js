import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import VideoItem from '../VideoItem'
import {
  UnorderedList,
  LoaderContainer,
  Banner,
  BannerHead,
  Icon,
  RetryBtn,
} from './styledComponents'
import {Oval} from 'react-loader-spinner'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE'
}

export default function TrendingRoute({mode, toggleMode}) {
  const navigate = useNavigate()
  const [trendingVideosList, setTrendingVideosList] = useState([])
  const jwtToken = Cookies.get('jwt_token')
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  
    useEffect(() => {
        if(jwtToken === undefined) {
          navigate('/login')
        } else {
          getTrendingVideos()
        }
        console.log("useEffect is used")
      },[navigate, jwtToken])

  const backtoHome = () => {
        navigate('/')
  }

  const getTrendingVideos = async ()=>{
    const trendingVideosApiUrl = "https://apis.ccbp.in/videos/trending"
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
    setApiStatus(apiStatusConstants.inProgress)
    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok === true){
      const updatedData = data.videos.map(video => ({
        id:video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        viewCount: video.view_count,
        publishedAt: video.published_at
      }))
      setApiStatus(apiStatusConstants.success)
      setTrendingVideosList(updatedData)
    }else {
      setApiStatus(apiStatusConstants.failure)
      console.log(data.error_msg)
    }

  }

  const showVideoDetails = ()=>{
    console.log("video Details should be shown")
  }
  const renderTrendingVideos = ()=>{
    return(
    <div>
      <Banner>
      <Icon />
      <BannerHead>Trending</BannerHead>
      </Banner>
      <UnorderedList>
        {trendingVideosList.length > 0 ? (
          trendingVideosList.map(trending => (
            <VideoItem videoData={trending} key={trending.id} onClick={showVideoDetails} />
          ))
        ): (
          <div>No Trending Videos</div>
        )}
        
      </UnorderedList>
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

  const renderFailureView = ()=>{
    return (
      <div className='failure-cotntainer'>
        <img className='failure-image' alt="failure view"
         src={this.props.$mode==='light' ?'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'}/>
        <h1 className='heading'>Oops! Something Went Wrong</h1>
        <p >We are having some trouble to complete your request.</p>
        <p>Please try Again.</p>
        <RetryBtn>Retry</RetryBtn>
      </div>
    )
  }
  const renderAll = () => {
    switch(apiStatus){
      case apiStatusConstants.success:
        return renderTrendingVideos()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default: 
        return null      
    }
  }
  return (
    <div $mode={mode} toggleMode={toggleMode}>
      {renderAll()}
      <Link to="/"><button onClick={backtoHome}>Back</button></Link> 
    </div>
  )
}
