import styled from 'styled-components'
import { FaFire} from 'react-icons/fa';

export const SavedVideosRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  min-width: 75%;
`
export const NoSavedVideos = styled.img`
  height: 400px;
  width: 350px;
`
export const Heading = styled.h1`
  font-size: 30px;
`
export const Paragraph = styled.p``
export const RetryBtn = styled.button`
  padding: 10px;
  margin: 10px;
  background-color:#00306e ;
  color: white;
  outline: none;
  text-align: center;
  border: none;
  border-radius: 8px;
`
export const VideoList = styled.div``
export const Banner = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px;
  border-radius: 10px;
  margin-top: 0;
`
export const BannerHead = styled.h1`
    padding: 10px;
    margin: 10px;
`
export const Icon = styled(FaFire)`
  color: red;
  height: 70px;
  width: 65px;
  border-radius: 50px;
  padding: 10px;
  margin: 10px;
`
export const Unorder = styled.ul`
  display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: auto;
width: 90%;
max-width: 1110px;
`