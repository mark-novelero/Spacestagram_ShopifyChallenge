import React, { useState } from 'react'; 
import '../App.css'


const Home = (props) => {

   
    return (
        <segment>
           <br></br>
            <div className = 'main-card'>
                <img className = 'photo' src = {props.spacePhoto.url} alt = {props.spacePhoto.title}></img>
                <h2 className = 'photo-title'>{props.spacePhoto.title}</h2>
                <p>{props.spacePhoto.date}</p>
                <p className = "photo-description">{props.spacePhoto.explanation}</p>
            </div>
        </segment>
    )
}

export default Home; 