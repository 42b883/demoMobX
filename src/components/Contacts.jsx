import React from "react";
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
          addToFav={props.addToFav}
          deleteFav={props.deleteFav}
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

export default Contacts;
