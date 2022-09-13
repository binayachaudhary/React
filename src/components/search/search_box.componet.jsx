import { Component } from 'react';

import './search_box.style.css';

class SearchBox extends Component{

    render(){
   
        return (
            <input
            className={`search_box ${this.props.className}`}
            type='search'
            placeholder={this.props.placeholder}
            onChange={this.props.onSearchHadler}
            />
        )
    }
}

export default SearchBox;