import React from "react";
import { observer, inject } from "mobx-react";

const SortBtn = props => {
  return (
    <div className="row">
      <div className="col s6 offset-s3 9m offset-m8">
        <button
          onClick={props.ContactsStore.handleSort}
          className="btn waves-effect waves-light"
          name="sort"
        >
          Sort
          <i className="material-icons right">filter_list</i>
        </button>
      </div>
    </div>
  );
};

export default inject("ContactsStore")(observer(SortBtn));
