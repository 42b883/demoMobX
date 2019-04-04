import React, { Component } from 'react';

class SearchBar extends Component {
    
    render() {

        return (
            <div className="row">
                <div className="col s12">
                 <div className="row">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <input
                     type="text" 
                     id="autocomplete-input"
                     className="autocomplete"
                     onChange={this.props.handleSearch}
                     value={this.props.search}
                     placeholder="Search for name..."
                     />
                    {/* <label for="autocomplete-input">search the best</label> */}
                    </div>
                  </div>
                </div>
             </div>
        );
    }
}

export default SearchBar
