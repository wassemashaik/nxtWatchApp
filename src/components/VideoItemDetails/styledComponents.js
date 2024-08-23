import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { GoDot } from "react-icons/go";
import React from 'react';

export const Godot = styled(GoDot)`
  font-size: 10px;
  margin-top: 5px;
`
export const LikeBtn = styled.button`
  color: ${props=> (props.isActive ? '#2563eb': ' #64748b')};
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 5px;
  border: none;
  cursor: pointer;
  outline: 0;
  &:hover {
    color: #0f3970;
    opacity: 0.8;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const Player = styled(ReactPlayer)`
  min-width: 90%;
`
export const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`
export const Title = styled.h1`
  font-size: 18px;
  font-weight: normal;
  margin:5px;
`
export const Para = styled.p`
  margin: 5px;
`
export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Channel = styled.div`
  display: flex;
  margin: 5px;
  margin-top: 20px;
`
export const ChannelName = styled.div`
  display: flex;
  flex-direction: column;
`
export const IbCricket = styled.p`
  margin: 0;
`
export const Description = styled.div`
  padding: 20px;
  margin: 10px;
`
export const Profile = styled.img`
  height: 40px;
  width: 40px;
`