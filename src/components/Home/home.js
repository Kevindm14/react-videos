import React, { Component } from 'react'
import Logo from '../../assets/images/logo.png'
import SearchForm from '../Search/SearchForm'
import ListVideos from './listVideos'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import './style.css'

export default class home extends Component {
	state = {
    videos: [],
    query: ''
    
  }

	render() {
		return (
			<React.Fragment>
        <CssBaseline/>
        
				<AppBar position="static" style={{ background: 'black' }}>
					<Toolbar className="appbar">
						<Typography variant="h6" color="inherit">
							<img src={Logo} width="50" height="35" alt="logo" />
						</Typography>
						<SearchForm query={this.handleSearch} search={this.search} />
						<AccountCircle />
					</Toolbar>
				</AppBar>

				<Container maxWidth="xl" style={{ marginTop: '30px' }}>
				<ListVideos videos={this.state.videos}/>
				</Container>
			</React.Fragment>
		)
	}

	 search = () => {
    const data = {
      part: 'snippet, id',
      type: 'video',
      maxResults: '18',
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
}