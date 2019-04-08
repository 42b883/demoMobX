import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem.jsx";

const Contacts = props => {
  let contactsTitle = null;
  if (props.contacts.length) {
    contactsTitle = (
      <div>
        <h4 className="blue-grey-black">Contacts</h4>
        <br />
      </div>
    );
  }
  const filteredContacts = props.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(props.search.toLowerCase());
  });
  const contactList = props.contacts.length ? (
    filteredContacts.map(contact => {
      return (
        <ContactItem
          key={contact.id}
          id={contact.id}
          contact={contact}
          name={contact.name}
          email={contact.email}
          username={contact.username}
          website={contact.website}
          phone={contact.phone}
          hometown={contact.address.city}
        />
      );
    })
  ) : (
    <div className="center">Contacts list is empty</div>
  );

  return (
    <div>
      {contactsTitle}
      {contactList}
      <br />
    </div>
  );
};

Contacts.propTypes = {
  ContactsStore: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired
};

export default inject("ContactsStore")(observer(Contacts));
