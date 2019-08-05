import React from 'react';
import Video from './videos'

const ListVideos = ({videos}) => (
  <div>
    {
      videos.map(vid => (
        <Video
          key={vid.id.videoId}
          newVideo={vid}
        />
        
      ))
    }
  </div>
)
export default ListVideos;
