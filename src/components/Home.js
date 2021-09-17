import React, { useState } from 'react'; 
import '../App.css'
import videoClip from './videoClip.mp4'
import './home.css'



const Home = (props) => {

   
    return (
        <div>
        <header className = "page-header">
            <h1 className = "main-title">Spacestagram</h1>
         </header>
        <segment className = "top-segment">
            <video className = "video-backgound" autoPlay muted loop>
                <source src = {videoClip} type = "video/mp4"></source>
            </video>
            <div className = 'main-card'>
                {props.spacePhoto.media_type === 'video' ? <iframe className = 'photo' src = {props.spacePhoto.url} title = 'space video' allow = 'encrypted-media' allowFullScreen/> :
                <img className = 'photo' src = {props.spacePhoto.url} alt = {props.spacePhoto.title}></img>}
                <h2 className = 'photo-title'>{props.spacePhoto.title}</h2>
                <p className = "photo-date">{props.spacePhoto.date}</p>
                    <span>
                    {props.liked === false ? <i className="far fa-heart" id = "love" onClick = {() => {props.didLike()}}></i> : <i class="fas fa-heart" id = "user-liked" onClick = {() => {props.didLike()}}></i>}
                    </span>
                    <span>
                    <i class="far fa-thumbs-down" id = "thumbs-down"></i>
                    </span>
                
                <p className = "photo-description">{props.spacePhoto.explanation}</p>
            </div>
        </segment>
        </div>
    )
}

export default Home; 