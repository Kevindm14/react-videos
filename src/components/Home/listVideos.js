import React from 'react';
import Video from './videos'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'

class ListVideos extends React.Component {
  render() {
    const {
      videos
    } = this.props;

    return (
      <Grid container spacing={1}>
        {
          videos.map(vid => (
            <Video
              key={vid.id.videoId}
              newVideo={vid}
              goTo={(path) => {
                this.props.history.push(path)
              }}
            />        
          ))
        }
      </Grid>
    )
  }
} 

export default withRouter(ListVideos);
