import styled from "styled-components";
import {BsSearch} from 'react-icons/bs'

export const MainContainer = styled.div`
    display: flex;
  flex-direction: column;
  justigy-content: center;
  positon: absolute;
  min-width: 75%;
  min-height: 100%;
  padding: 10px;
`
export const VideoSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    width: 90%;
`
export const BannerContainer = styled.div`
  position: relative;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  color: white;
  min-width: 500px;
  min-height: 250px;
  margin-left: 20px:
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 10px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const CloseButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border-style: normal;
  border: 1px black;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 50%;
  top: 10px;
  right: 10px;
  position: absolute;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`
export const BannerContent = styled.div`
  flex: 1;
  text-align: flex-start;
`
export const Para = styled.p`
  font-size: 20px;
  
`
export const Btn = styled.button`
  height: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 39px;
  cursor: pointer;
  border: 0;
`
export const Button = styled.button`
  background-color: transparent;
  border: 1px #3a3b3b;
  border-type: normal;
  color: black;
  padding: 10px;
  margin: 10px;
  curosor: pointer;
  outline: 2px #3a3b3b;
`
export const InputEle = styled.input`
  border: 2px solid grey;
  border-right: none;
  height: 40px;
  width: 50%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 50px;
  padding-left: 10px;
  font-size: 20px;
`
export const InputContainer = styled.div`
  // display: flex;
  // align-items: center;
  // background-color: #f1f5f9;
  // border-radius: 8px;
  // padding-left: 16px;
  // padding-top: 8px;
  // padding-bottom: 8px;
  // padding-right: 16px;
  // margin-bottom: 10px;
`
export const WebsiteLogo = styled.img`
  width: 165px;
`
export const SearchIcon = styled(BsSearch)`
  font-size: 20px;
`