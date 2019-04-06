import React from "react";

const SearchBar = props => {
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
              onChange={props.handleSearch}
              value={props.search}
              placeholder="Search for name..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
