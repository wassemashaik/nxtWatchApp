import React, { Component } from 'react'
import Cookies from 'js-cookie'
import VideoItem from '../VideoItem'
import {Oval} from 'react-loader-spinner'
import './index.css'
import {NoVideos, SearchNotFoundContainer,Heading, RetryBtn} from './styledComponents'
import WatchContext from '../../context/WatchContext'
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllVideos extends Component {
  state = {videosList: [],  apiStatus:''}
  
   componentDidMount(){
    this.getVideos()
   }

   componentDidUpdate(prevProps){
    if (prevProps.searchInput !== this.props.searchInput){
      this.getVideos()
    }
   }

   getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.initial})
    
    const {searchInput} = this.props
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options={
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }
     const response = await fetch(homeVideosApiUrl, options)
     const data = await response.json()
    if (response.ok===true){
      const updatedData = data.videos.map(video => ({
        id:video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        viewCount: video.view_count,
        publishedAt: video.published_at
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success
      })
    }else {
      this.setState({apiStatus: apiStatusConstants.failure})
      console.log(data.error_msg)
    }
  }

  renderNoSearchResult=()=> {
    <WatchContext.Consumer>
      {value => {
        const {videosList} = this.state
      const rendervideosList = videosList.length > 0
  
      return rendervideosList ? (
        <div className='video-list-container'>
        <ul className='videos-list'>
          {videosList.map(video => (
            <VideoItem videoData={video} key={video.id}/>
          ))}
        </ul>
      </div>
      ) : (
        <SearchNotFoundContainer>
          <NoVideos
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no Videos"
          />
          <Heading className='heading'>No search results found</Heading>
        <p >Try different key words or remove search filter</p>
        </SearchNotFoundContainer>
      )
      }}
    </WatchContext.Consumer>
      
  }
  renderLoadingView = ()=>{
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
  renderFailureView = () => {
    return (
      <div className='failure-cotntainer'>
        <img className='failure-image' alt='failure view'
         src={this.props.$mode==='light' ?'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'}/>
        <h1 className='heading'>Oops! Something Went Wrong</h1>
        <p >We are having some trouble to complete your request.</p>
        <p>Please try Again.</p>
        <RetryBtn className='btn btn-primary' onClick={this.getVideos}>Retry</RetryBtn>
      </div>
    )
  }
  renderAll = () => {
    const {apiStatus} = this.state
    switch(apiStatus){
      case apiStatusConstants.success:
        return this.renderNoSearchResult()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default: 
        return null      
    }
  }
  render(){  
    return (
    <>
    {this.renderAll()}
    </>
    )
  }  
}
export default AllVideos