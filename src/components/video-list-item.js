import React from 'react';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const VideoListItem = (props) => {
    
    const film= props.movie;
    console.log('----list---', film.poster_path)
    
    return (
        <li className="list-group-left">
            <div className="media">
                <div className="media-left">
                    <img width="100px" height="100px" className="media-object img-rounded" src ={`${IMAGE_URL}${film.poster_path}`} />
                </div>           
            
                <div className="media-body">
                    <li className="title_liste_item">{film.title} </li>
                </div>
            </div>

        </li>
    )

}

export default VideoListItem;