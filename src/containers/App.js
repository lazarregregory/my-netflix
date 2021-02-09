import axios from 'axios';
import React, {Component}from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import VideoDetail from '../components/video-detail';
import VideoId from '../components/video-id';
const SEARCH_URL = 'search/movie?language=fr&include_adult=false';
const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIE_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
const API_KEY = 'api_key=b1bb009f89a909c0ae0b65bc17104e0e';
 
class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      movieList:{}, 
      currentMovie:{},
      noVideo: '',
    };
  }
 
  componentWillMount() {
    this.getAxiosRes();
  }
 
  getAxiosRes() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then(function(response) {
      this.setState({movieList:response.data.results.slice(1, 7), currentMovie: response.data.results[0]}, function () {
        this.getVideoRes();
      });
    }.bind(this));
  }
 
  getVideoRes(){
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function (response) {
      if (response.data.videos && response.data.videos.results[0]){

          const youtubeId = response.data.videos.results[0].key;
          let newCurrentMovie = this.state.currentMovie;
          newCurrentMovie.videoId = youtubeId;
          this.setState({currentMovie: newCurrentMovie, noVideo: '' });
      }else {
        this.setState({ noVideo: 'Video indisponible !!!'})
      }
    }.bind(this));
  }

 onclickitem(film) {
      
    this.setState({currentMovie: film}, () =>{
      
      this.getVideoRes();
      this.setRecommandation();
    })
  }

  getTextSearch (textSearch){
    
    axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${textSearch}`).then(function (res){
      
      if(res.data && res.data.results[0]) {
        if(res.data.results[0].id != this.state.currentMovie.id){
          this.setState({ currentMovie: res.data.results[0] }, () =>{
            this.getVideoRes();
            this.setRecommandation();
          })
        }
      }
    }.bind(this));
  
  }
  setRecommandation() {
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function(res) {
      console.log('-------recom---',res)
      this.setState({movieList:res.data.results.slice(0,6)});
    }.bind(this));
  }

  
  
  render() {
    
    const rendreMovieList = () => {
      if(this.state.movieList.length >= 6) {
        return <VideoList listefilms={this.state.movieList} callBack={this.onclickitem.bind(this)}/>
      }
    }
    const renderNoVideo = () => {
      if (this.state.noVideo != '') {
        return <h1>{this.state.noVideo}</h1>
      }
    }
 
    return (
      <div>
        <div className="search-bar">
          <SearchBar callBack={this.getTextSearch.bind(this)}/>
        </div>
          <div className="row">
            <div className="col-md-8">
                <VideoId videoId={this.state.currentMovie.videoId}/>
                <VideoDetail title={this.state.currentMovie.title} overview={this.state.currentMovie.overview} date={this.state.currentMovie.release_date}/>
                {renderNoVideo ()}            
            </div>
            <div className="col-md-4">
              {rendreMovieList()}
            </div>
          </div>
          
      </div>
    )
   
  }
    
}
export default App;