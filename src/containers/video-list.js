import React from 'react';
import VideoListItem from '../components/video-list-item';


const VideoList = (props) => {
   
    const films = props.listefilms;
 
        return (
            <div>
                <ul>
                    {
                        films.map(film =>{
                            return <VideoListItem key={film.id} movie={film} filmProps={film} callBack={receivefilm}/>
                        })
                    }
                    
                </ul>
            </div>
        )
        function receivefilm(film) {
        
            props.callBack(film)
        }
        

}

export default VideoList;