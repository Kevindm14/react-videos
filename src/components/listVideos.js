import React from 'react';
import Video from './videos'
import Grid from '@material-ui/core/Grid'

const ListVideos = ({videos}) => (
  <Grid container spacing={1}>
    {
      videos.map(vid => (
        <Video
          key={vid.id.videoId}
          newVideo={vid}
        />        
      ))
    }
  </Grid>
)
export default ListVideos;
