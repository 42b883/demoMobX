import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component {
    state = {
        contacts: [ ]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                this.setState({
                    contacts: res.data.slice(0,5)
                })
            })
    }

    render() {
        const { contacts } = this.state;
        const contactList = contacts.length ? (
            contacts.map(contact => {
                return (
                    <div className="post card" key={contact.id}>
                        <div className="card-content">
                            <span className="card-title blue-text text-darken-2">{contact.name}</span>
                            <p>username: {contact.username}</p>
                            <p>email: {contact.email}</p>
                            <p>website: {contact.website}</p>
                            <p>phone: {contact.phone}</p>
                            <p>hometown: {contact.address.city}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">Contact list is empty</div>
        )
       
        return (
            <div className="container">
                <h4 className="center">Main</h4>
                {contactList}
            </div>
        )
    }
}

export default Main