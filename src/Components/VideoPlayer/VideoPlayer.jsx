import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../edusity_assets/Video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);


  return (
    <div ref={player} className={playState ? "video-player" : "video-player hide"} onClick={(e)=>{if(e.target===player.current){setPlayState(false)}}}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer