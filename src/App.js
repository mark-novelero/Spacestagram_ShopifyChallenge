import React from 'react';
import Home from './components/Home';

const apiKey = process.env.REACT_APP_NASA_KEY

class App extends React.Component{

  state = {
    spacePhoto: {}
  }

  componentDidMount(){

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => res.json())
      .then(spaceObj => this.setState(
        {spacePhoto: spaceObj}
    ))

  }
 
  render(){
    return (
      <div>
        <Home spacePhoto = {this.state.spacePhoto}></Home> 
      </div>
    )
  }
  
}

export default App;
