import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home';



class App extends React.Component{

  state = {
    spacePhoto: {}
  }

  componentDidMount(){

    fetch('https://api.nasa.gov/planetary/apod?api_key=')
      .then(res => res.json())
      .then(spaceObj => this.setState(
        {spacePhoto: spaceObj}
    ))

  }
 

  render(){
    return (
      <div>
        <Route path = '/'>
          <Home spacePhoto = {this.state.spacePhoto}></Home>
        </Route>
      </div>
    )
  }
  
}

export default App;
