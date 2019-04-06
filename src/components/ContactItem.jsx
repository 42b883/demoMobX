import React, { Component } from 'react';

class ContactItem extends Component {
    
    render() {
       let contactList = (
        <div>
        <div className="post card" key={this.props.id}>
            <div className="card-content">
                <span className="card-title blue-text text-darken-2">{this.props.name}</span>
                <p>username: {this.props.username}</p>
                <p>email: {this.props.email}</p>
                <p>website: {this.props.website}</p>
                <p>phone: {this.props.phone}</p>
                <p>hometown: {this.props.hometown}</p><br/>
                <span className="grey-text">add to favorites     <button onClick={() => {this.props.addToFav(this.props.contact); this.props.deleteFav(this.props.id)}} className="btn-floating btn-small waves-effect waves-light grey-darken">
                <i className="material-icons">add</i></button>
                </span>
            </div>
        </div>      
        </div>
       );
        return (    
            <div>
                 {contactList}
            </div>
        );
    }
}

export default ContactItem
