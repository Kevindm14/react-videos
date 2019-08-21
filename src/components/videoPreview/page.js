import React, { Component } from 'react'
import { getSearchParam } from '../services/url/index'
import { withRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

class Page extends Component {
	render() {
		const videoId = this.getVideoId()
		const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

		return (
			<Container maxWidth="xl" style={{ marginTop: '30px' }}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
					<iframe className="video-player"
						src={embedUrl}
						allowFullScreen 
						frameBorder='0' 
						allow='autoplay' 
						title="video"
						width="710"
						height="398"
					/>
					</Grid>
				</Grid>
			</Container>
		)
	}

	getVideoId() {
    return getSearchParam(this.props.location, 'v');
  }
}



export default withRouter(Page);
