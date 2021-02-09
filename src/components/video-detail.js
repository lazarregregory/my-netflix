import React from 'react';


const VideoDetail = (props) => {
   const title = props.title;
   const overview = props.overview; 
   const date = props.date
    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
            <p>la date de sortie du film est :{date}</p>
        </div>
    )
}

export default VideoDetail;