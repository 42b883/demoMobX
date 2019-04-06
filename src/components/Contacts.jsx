import React, { Component } from 'react';
import ContactItem from './ContactItem.jsx';


class Contacts extends Component {
    render() {
        let contactsTitle = null;
        if (this.props.contacts.length) {
            contactsTitle= (
                <div>
                     <h4 className="blue-grey-black">Contacts</h4>
                     <br/>
                </div>
            )
        }
        let filteredContacts = this.props.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.props.search.toLowerCase());
            }
        )
        let contactList = this.props.contacts.length ? (
            filteredContacts.map(contact => {
                return (
                    <ContactItem 
                    addToFav={this.props.addToFav}
                    deleteFav={this.props.deleteFav}
                    key={contact.id}
                    id={contact.id}
                    contact={contact}
                    contacts={this.props.contacts}
                    name={contact.name}
                    email={contact.email}
                    username={contact.username}
                    website={contact.website}
                    phone={contact.phone}
                    hometown={contact.address.city}
                    />
                )
            })        

        ) : (
            <div className="center">Contacts list is empty</div>
        )

        return (
            <div>
            {contactsTitle}
            {contactList}
            <br/><br/>
            </div>
        );
    }
}

export default Contacts
