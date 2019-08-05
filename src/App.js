import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import ListVideos from './components/listVideos'

class App extends Component {
  state = {
    videos: [],
    query: ''
    
  }

  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const API_KEY = 'AIzaSyBD7zKwj1hct82_SC3ao_HQauagiGmOipc'
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    
    script.onload = () => {
      window.gapi.load('youtube', () => {
        window.gapi.client.setApiKey(API_KEY)
        window.gapi.client.load('youtube', 'v3', () => {
          console.log("gapi is ready")
          this.setState({ gapiReady: true });
        });
      });
    };
    document.body.appendChild(script);
  }

  search = () => {
    const data = {
      part: 'snippet, id',
      type: 'video',
      maxResults: '10',
      q: this.state.query
    }

    var request = window.gapi.client.youtube.search.list(data)
    request.execute((response) => {
      this.setState({
        videos: response.items
      })
    });
  }

  handleSearch = e => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <>
        <SearchForm query={this.handleSearch} search={this.search} />
        <ListVideos videos={this.state.videos}/>
      </>
    )
  }
}

export default App;
