import React, { useState } from 'react'; 
import '../App.css'


const Home = (props) => {

   
    return (
        <div>
            <img className = "photo" src = {props.spacePhoto.url} alt = {props.spacePhoto.title}></img>
            <h1>{props.spacePhoto.title}</h1>
            <p>{props.spacePhoto.date}</p>
            <p>{props.spacePhoto.explanation}</p>
        </div>
    )
}

export default Home; 