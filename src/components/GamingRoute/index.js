import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import GamingCard from '../GamingCard'
import {Unorder} from './styledComponents'
import {Oval} from 'react-loader-spinner'
import { GamingThemeContainer, Banner, Icon, BannerHead,RetryBtn } from './styledComponents'
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

export default function GamingRoute({mode, toggleMode}) {
  const navigate = useNavigate()
  const jwtToken = Cookies.get('jwt_token')
  const [gamingVideosList, setGamingVideosList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

    useEffect(() => {
        if(jwtToken === undefined) {
          navigate('/login')
        }
      }, [navigate])
    
    useEffect(()=> {
        getGaming()
    }, [])

  const backtoHome = () => {
        navigate('/')
  }    
  
  const getGaming = async()=>{
    setApiStatus(apiStatusConstants.inProgress)
    const gamingVideosApiUrl = "https://apis.ccbp.in/videos/gaming"
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true){
      const updatedData = data.videos.map(video => ({
        id:video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))
      setApiStatus(apiStatusConstants.success)
      setGamingVideosList(updatedData)

      console.log(updatedData)
    }else{
      setApiStatus(apiStatusConstants.failure)
      console.log(data.error_msg)
    }
  }

  const renderGamingVideos = ()=>{
    return (
      <div>
        <Banner>
          <Icon />
          <BannerHead>Gaming</BannerHead>
        </Banner>
        <Unorder>
          {gamingVideosList.length > 0 ? (
            gamingVideosList.map(game => (
              <GamingCard gamingData={game} key={game.id} />
            ))
          ): (
            <div>
              No gaming Videos
            </div>
          )}
        </Unorder>
      </div>
    )
  }
  const renderLoadingView = ()=>{
    return(
    <div className="loader-container" data-testid="loader">
      <Oval visible={true}
        height="80"
        width="80"
        color="#180c42"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass="" />
    </div>
    )
  }
  const renderFailureView=()=> {
    return (
      <div className='failure-cotntainer'>
        <img className='failure-image' src={this.props.$mode==='light' ?'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'}/>
        <h1 className='heading'>Oops! Something Went Wrong</h1>
        <p >We are having some trouble to complete your request.</p>
        <p>Please try Again.</p>
        <RetryBtn onClick={getGaming()}>Retry</RetryBtn>
      </div>
    )
  }
  const renderAll = () => {
    switch(apiStatus){
      case apiStatusConstants.success:
        return renderGamingVideos()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default: 
        return null      
    }
  }
  return (
    <GamingThemeContainer $mode={mode} toggleMode={toggleMode}>
      {renderAll()}
      <Link to="/"><button onClick={backtoHome}>Back</button></Link> 
    </GamingThemeContainer>
  )
}
