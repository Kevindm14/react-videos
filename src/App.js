import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/home'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }

  componentDidMount() {
    this.connectGapi();
  }

  connectGapi() {
    const API_KEY = 'AIzaSyBD7zKwj1hct82_SC3ao_HQauagiGmOipc'
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    
    script.onload = () => {
      window.gapi.load('youtube', () => {
        window.gapi.client.setApiKey(API_KEY)
        window.gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true });
        });
      });
    };
    document.body.appendChild(script);
  }
}

export default App;
