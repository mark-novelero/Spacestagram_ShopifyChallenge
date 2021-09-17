import React from 'react';
import { Header } from './components/Header';
import Home from './components/Home';

const apiKey = process.env.REACT_APP_NASA_KEY

class App extends React.Component{

  state = {
    spacePhoto: {}, 
    liked: false, 
    hate: false
  }

  componentDidMount(){

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => res.json())
      .then(spaceObj => this.setState(
        {spacePhoto: spaceObj}
    ))

  }

  didLike = () => {

    if (this.state.hate === false && this.state.liked === false){
    this.setState({
      liked: true, 
      hate: false
    })} 

    if (this.state.liked === true && this.state.hate === false){
      this.setState({
        liked: false
      })
    }
  }

  didHate = () => {
    this.setState({
      liked: false, 
      hate: true
    })
  }
 
  render(){
    return (
      <div>
        <Home hate = {this.state.hate} liked = {this.state.liked} 
              didLike = {this.didLike} didHate = {this.didHate} spacePhoto = {this.state.spacePhoto}>
        </Home> 
      </div>
    )
  }
  
}

export default App;
