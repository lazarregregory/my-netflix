import React from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

const VideoId = (props) => {

const vid = props.videoId;
    return(
        <div className ="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`${YOUTUBE_URL}${vid}`} />
        </div>
    )
}



export default VideoId;