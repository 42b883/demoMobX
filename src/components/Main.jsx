import React, { Component } from 'react'
import axios from 'axios'

class Main extends Component {
    state = {
        contacts: [ ],
        search: ''
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

    handleSearch = (e) => {
        this.setState({
            search: e.target.value    
        })
    }

    render() {
        const { contacts } = this.state;
        let filteredContacts = contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.state.search.toLowerCase());
            }
        )
        let contactList = contacts.length ? (
            filteredContacts.map(contact => {
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
            <div className="center">Contacts list is empty</div>
        )
       
        return (
            <div className="container">
                <h4 className="center">Main</h4>
                <div className="row">
                <div className="col s12">
                 <div className="row">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <input
                     type="text" 
                     id="autocomplete-input"
                     className="autocomplete"
                     onChange={this.handleSearch}
                     value={this.state.search}
                     placeholder="Search for name..."
                     />
                    {/* <label for="autocomplete-input">search the best</label> */}
                    </div>
                  </div>
                </div>
             </div>
                {contactList}
            </div>
        )
    }
}

export default Main