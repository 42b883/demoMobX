import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

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
              onChange={props.ContactsStore.handleSearch}
              value={props.ContactsStore.search}
              placeholder="Search for name..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  ContactsStore: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired
};

export default inject("ContactsStore")(observer(SearchBar));
