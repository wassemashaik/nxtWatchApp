import styled from 'styled-components'
import { FaFire} from 'react-icons/fa';

export const UnorderedList = styled.ul`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: auto;
width: 90%;
max-width: 1110px;
`
export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
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
export const RetryBtn = styled.button`
  padding: 10px;
  margin: 10px;
  background-color:#00306e;
  color: white;
  outline: none;
  text-align: center;
  border: none;
  border-radius: 8px;
`  