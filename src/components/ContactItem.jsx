import React, { Component } from 'react';

class ContactItem extends Component {
    
    render() {

        return (
            <div className="post card" key={this.props.id}>
                <div className="card-content">
                <span className="card-title blue-text text-darken-2">{this.props.name}</span>
                <p>username: {this.props.username}</p>
                <p>email: {this.props.email}</p>
                <p>website: {this.props.website}</p>
                <p>phone: {this.props.phone}</p>
                {/* <p>hometown: {this.props.hometown}</p> */}
             </div>
            </div>        
        );
    }
}

export default ContactItem
