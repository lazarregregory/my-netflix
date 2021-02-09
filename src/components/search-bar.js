
import React,{Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {placeHolder: "taper votre film", searchText: ""}
    }

    render () {
        return (
            <div className="row">
            <div className ="col-md-8 input-group">
                <input className="form-control input-lg" type ="text"  onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                <span className="input-group-btn">
                    <button className="btn" onClick={this.handleClick.bind(this)}>Go</button>
                </span>
            </div>
        </div>
        )
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    }

    handleClick() {
        // console.log("---------");
        // console.log("----bien click-----");
        // console.log("---------");
        // console.log('SearchText', this.state.searchText);
        this.props.callBack(this.state.searchText)
    }
}


export default SearchBar;