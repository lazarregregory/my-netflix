import React from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

const VideoId = (props) => {

const video = props.videoId;
    return(
        <div className ="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`${YOUTUBE_URL}${video}`} />
        </div>
    )
}



export default VideoId;