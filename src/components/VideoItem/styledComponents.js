import { Link } from "react-router-dom";
import styled from "styled-components";

export const VideoItemList = styled.li`
  display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    width: 300px;
    height:fit-content;
    margin-right: 20px;
`
export const Thumbnail = styled.img`
width: 100%;
  max-height: 350px;
  border-radius: 6px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    margin-bottom: 48px;
    width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: 20px;
`
export const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 8px;
  }
`
export const Para = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    margin-bottom: 6px;`
export const ProductDetails = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 2px;
`
export const View = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 6px;
`
export const RatingContainer = styled.div`
  display: flex;
    align-items: center;
    
    border-radius: 6px;
    padding: 6px 16px;
`
export const Profile = styled.img`
  height: 50px;
  width: 35px;
  margin:auto;
  margin-top: 20px;
  padding: 8px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`