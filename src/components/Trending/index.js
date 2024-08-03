import React from 'react'
import TrendingRoute from '../TrendingRoute'
import './index.css'
import {TrendingVideosContainer} from './styledComponents'

const Trending =({mode, toggleMode})=>
    (
      <TrendingVideosContainer $mode={mode} toggleMode={toggleMode}>
        <TrendingRoute />
      </TrendingVideosContainer>  
    )


export default Trending