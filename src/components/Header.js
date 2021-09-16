import React from 'react'
import headerVideo from './header.mp4'
import './components.css'


export const Header = (props) => {

  return(
    <header>
        <video className = "video-backgound" autoPlay muted loop>
            <source src = {headerVideo} type = "video/mp4"></source>
            <h1 class="viewport-header">Spacestagram Photo of the Day</h1>
        </video>
    </header>
   )
 }