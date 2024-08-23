import React from 'react'

const WatchContext = React.createContext({
    savedVideoList: [],
    addVideo: ()=>{},
    deleteVideo: ()=>{},
    isDarkTheme: false,
    toggleTheme: ()=>{}
})       

export default WatchContext