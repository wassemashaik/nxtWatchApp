import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import Navbar from "../Navbar";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaHome, FaFire, FaGamepad} from 'react-icons/fa';
import {
   HomeContainer,
   HomeContent, 
   VideosContainer,
   Home,
   MenuItem, 
   SecondContainer,
   Para,
  SidebarContainer,
  Divider,
  CustomLink,
  ContactUs,
  SocialMediaContainer,
  MenuItemContainer,
  IconImage,
  BottomContainer,
} from './styledComponents'
import {Outlet, useNavigate } from 'react-router-dom';

const HomeRoute =(props)=> {
  const [mode, setMode] = useState('light')
  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken === undefined) {
      navigate('/login')
    }
  }, [navigate])

  const toggleMode = () => {
    setMode((prevMode)=>(prevMode === 'light'? 'dark': 'light'))
  }
    
  return(
  <>
  <Home data-testid="home" >
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <HomeContainer  $mode={mode}>
      <HomeContent>
        <SidebarContainer>
          <MenuItemContainer>
          <MenuItem>
            <CustomLink to="/" >
              <FaHome />
              <span>Home</span>
            </CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink to="/trending" >
              <FaFire />
              <span>Trending</span>
            </CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink to="/gaming" >
              <FaGamepad />
              <span>Gaming</span>
            </CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink to="/saved-videos" >
              <MdOutlinePlaylistAdd /> 
              <span>Saved Videos</span>
            </CustomLink>
          </MenuItem>
          </MenuItemContainer>
          <Divider />
          <BottomContainer>
          <ContactUs>Contact Us</ContactUs>
          <SocialMediaContainer>
            <IconImage alt="facebook logo" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"/>
            <IconImage alt="twitter logo" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"/>
            <IconImage alt="linked in logo" src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"/>
          </SocialMediaContainer>
          <Para>Enjoy! Now to see your channels and recommendations!</Para>
          </BottomContainer>
        </SidebarContainer>
        {/* use conditional statement here to if the searched word is not found then the not found component should be shown instead of this container */} 
        <SecondContainer>
        <VideosContainer>
        <Outlet />
        </VideosContainer>
        {/* {showNotFound && <NotFound mode={mode}/>} */}
        </SecondContainer>
      </HomeContent>
    </HomeContainer>
  </Home>
  </>
  )
}

export default HomeRoute
