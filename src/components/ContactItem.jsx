import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

const ContactItem = props => {
  const ContactsStore = props.ContactsStore;
  const contactList = (
    <div>
      <div className="post card" key={props.id}>
        <div className="card-content">
          <span className="card-title blue-text text-darken-2">
            {props.name}
          </span>
          <p>username: {props.username}</p>
          <p>email: {props.email}</p>
          <p>website: {props.website}</p>
          <p>phone: {props.phone}</p>
          <p>hometown: {props.hometown}</p>
          <br />
          <span className="grey-text">
            add to favorites{" "}
            <button
              onClick={() => {
                ContactsStore.addToFav(props.contact);
                ContactsStore.deleteFav(props.id);
              }}
              className="btn-floating btn-small waves-effect waves-light grey-darken"
            >
              <i className="material-icons">add</i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
  return <div>{contactList}</div>;
};

ContactItem.propTypes = {
  ContactsStore: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  hometown: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default inject("ContactsStore")(observer(ContactItem));
