import React, { Component } from 'react';

class ContactItem extends Component {
    
    render() {
        let {id} = this.props.contact
       
        return (
            <div className="post card" key={this.props.id}>
                <div className="card-content">
                <span className="card-title blue-text text-darken-2">{this.props.name}</span>
                <p>username: {this.props.username}</p>
                <p>email: {this.props.email}</p>
                <p>website: {this.props.website}</p>
                <p>phone: {this.props.phone}</p>
                <p>hometown: {this.props.hometown}</p><br/>
                <span className="grey-text">add to favorites     <button onClick={() => this.props.addToFav(id) } className="btn-floating btn-small waves-effect waves-light grey-darken">
                    <i className="material-icons">add</i></button>
                </span>

             </div>
            </div>        
        );
    }
}

export default ContactItem
