
import React,{useState} from 'react';

const SearchBar = () => {
    const [placeHolder, setPlaceHolder] = useState('Tapez votre film ...');
    const [searchText, setSearchText] = useState('');

    return  (
        <div className="row">
            <div className ="col-md-8">
                <input type ="text" className="form-control input-lg" placeholder={placeHolder}/>
            </div>
        </div>
    )
}

export default SearchBar;