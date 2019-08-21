import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/Home/home'
import VideoPreview from './components/videoPreview/page'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/watch" render={() => <VideoPreview key={this.props.location.key}/> }/>
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

export default withRouter(App);
