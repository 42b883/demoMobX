import React from "react";

const SortBtn = ({ handleSort }) => {
  return (
    <div className="row">
      <div className="col s6 offset-s3 9m offset-m8">
        <button
          onClick={handleSort}
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

export default SortBtn;
