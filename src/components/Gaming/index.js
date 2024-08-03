import React from 'react'
import { GamingContainer} from './styledComponents'
import GamingRoute from '../GamingRoute'

const Gaming =({mode, toggleMode})=>
    (
      <GamingContainer mode={mode} toggleMode={toggleMode}>
        <GamingRoute/>
      </GamingContainer>  
    )


export default Gaming