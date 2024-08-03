import React from 'react'
import AllVideos from '../AllVideos'

import {
  VideoSectionContainer,
  BannerContainer,
   CloseButton,
   BannerContent,
   Button,
   WebsiteLogo,
   InputEle,
   InputContainer,
   SearchIcon,
   Para,
   MainContainer,Btn,
} from './styledComponents'
import { useState } from 'react'

const Home =({mode})=>{
  const [isVisible, setIsVisible] = useState(true);
  const [searchInput, setSearchInput] = useState('')
  
  const handleClose = () => {
    setIsVisible(false);
  };

  const onEnterSearchInput = () => {
    console.log("search icon is working")
    
  }
  const onSearchEnter = (event) => {
    if (event.key=== 'ENTER'){
      onEnterSearchInput()
    }
  }

  const onChangeSearch = (event) => {
    setSearchInput(event.target.value)
  }
  
   return ( 
      <MainContainer $mode={mode}>
        {isVisible && (
        <BannerContainer>
          <BannerContent>
            <WebsiteLogo alt="Banner Background image"
             src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"/>
          <Para>Buy Nxt Watch Premium prepaid plans with UPI</Para>
          <Button>GET IT NOW</Button>
          </BannerContent>
          <CloseButton onClick={handleClose}>X</CloseButton>
          </BannerContainer>
        )}  
        <InputContainer>
        <InputEle
          value={searchInput}
          type="search"
          data-testid="searchButton"
          placeholder="Search"
          onChange={onChangeSearch}
          onKeyDown={onSearchEnter}
        />
        <Btn type="button"><SearchIcon onClick={onEnterSearchInput}  /></Btn>
        </InputContainer>
        <VideoSectionContainer>
        <AllVideos searchInput={searchInput}/>
        </VideoSectionContainer>
      </MainContainer>  
    )
  }

export default Home