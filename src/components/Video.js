import React from 'react';

const Video = React.forwardRef( (props,ref) => {

  

  return (
  <video playsInline controls alt="All the devices" src={props.src} ref={props.refs} />
  )
})

export default Video;