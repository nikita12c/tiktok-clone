import React from 'react';
import "./Video.css";
import ReactPlayer from "react-player";
//in ReactPlayer component we can pass any url of vid like frm utube ,vimeo
function Video() {
  return (
    <div className="video">
      {/* <video loop autoplay='' muted src="https://youtu.be/inpok4MKVLM"></video> */}
    {/* <ReactPlayer className='video-player'  url="https://www.youtube.com/watch?v=O3ioZz_Vsug"/> */}
    <ReactPlayer className='video-player'  url="https://vimeo.com/243556536"/>
    </div>
  )
}

export default Video
// Google Small business vid link -->  https://services.google.com/fh/files/misc/india-make-small-strong.mp4
// https://youtu.be/inpok4MKVLM
// https://www.youtube.com/watch?v=O3ioZz_Vsug