import videoClip from './videoClip.mp4'
import './component.css'



const Home = (props) => {

    return (  
        <div>
            <video className = "video-backgound" autoPlay muted loop> 
                <source src = {videoClip} type = "video/mp4"></source>
            </video>
            <section className = 'main-card'>
                {props.spacePhoto.media_type === 'video' ? <iframe className = 'photo' src = {props.spacePhoto.url} title = 'space video' allow = 'encrypted-media' allowFullScreen/> :
                <img className = 'photo' src = {props.spacePhoto.url} alt = {props.spacePhoto.title}></img>}
                <h2 className = 'photo-title'>{props.spacePhoto.title}</h2>
                <p className = "photo-date">{props.spacePhoto.date}</p>
                <div classNAme = "icons">
                    <button className = "heart-button">
                        {props.liked === false ? <span className="far fa-heart" id = "love" onClick = {() => {props.didLike()}}></span> : <span class="fas fa-heart" id = "user-liked" onClick = {() => {props.didLike()}}></span>}
                    </button>
                    <button className = "dislike-button">
                        {props.hate === false ? <span class="far fa-thumbs-down" id = "thumbs-down" onClick = {() => {props.didHate()}}></span> : <span class="fas fa-thumbs-down" id = "user-hate" onClick = {() => {props.didHate()}}></span> }
                    </button>
                </div>
                <p className = "photo-description">{props.spacePhoto.explanation}</p>
            </section>
        </div> 
    )
}

export default Home; 