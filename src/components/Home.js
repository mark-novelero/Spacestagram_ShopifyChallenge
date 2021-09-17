import React, { useState } from 'react'; 
import '../App.css'
import videoClip from './videoClip.mp4'
import './components.css'


const Home = (props) => {

   
    return (
        <segment className = "top-segment">
            <video className = "video-backgound" autoPlay muted loop>
                <source src = {videoClip} type = "video/mp4"></source>
            </video>
            <div className = 'main-card'>
                <img className = 'photo' src = {props.spacePhoto.url} alt = {props.spacePhoto.title}></img>
                <h2 className = 'photo-title'>
                    {props.spacePhoto.title}
                </h2>
                <div className = "icon-dates">
                <p className = "photo-date">{props.spacePhoto.date}</p>
                </div>
                <p className = "photo-description">{props.spacePhoto.explanation}</p>
            </div>
        </segment>
    )
}

export default Home; 