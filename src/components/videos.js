import React from 'react';

const Videos = ({newVideo}) => {
  return (
    <ul>
      <li style={imgVideo}>
        <img src={newVideo.snippet.thumbnails.medium.url} alt={newVideo.title} />
      </li>
    </ul>
  )
}

const imgVideo = {
  listStyle: 'none'
}

export default Videos;
