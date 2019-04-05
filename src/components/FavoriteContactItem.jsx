import React, { Component } from 'react';

class FavoriteContactItem extends Component {
    
    render() {

       let favContactList = (
        <div className="post red card blue-grey">
        <div className="card-content">
        <span className="card-title red-text">{this.props.nameF}</span>
        <p>username: {this.props.usernameF}</p>
        <p>email: {this.props.emailF}</p>
        <p>website: {this.props.websiteF}</p>
        <p>phone: {this.props.phoneF}</p>
        <p>hometown: {this.props.hometownF}</p><br/>

     </div>
    </div>      
       )
       
        return (
            <div>
                {favContactList}
            </div>
        );
    }
}

export default FavoriteContactItem
