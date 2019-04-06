import React, { Component } from 'react';
import FavoriteContactItem from './FavoriteContactItem.jsx';


class FavoriteContacts extends Component {
    render() {
        let favTitle = null;
        if (this.props.contactsF.length) {
            favTitle= (
                <div>
                     <h4 className="blue-grey-text">Favorite Contacts</h4>
                     <br/>
                </div>
            )
        }
        let favContactList = this.props.contactsF.length ? (
            this.props.contactsF.map(favorite => {
                return (
                    <div  key={favorite.id}>
                    <FavoriteContactItem 
                    idF={favorite.id}
                    contactsF={this.props.contactsF}
                    nameF={favorite.name}
                    emailF={favorite.email}
                    usernameF={favorite.username}
                    websiteF={favorite.website}
                    phoneF={favorite.phone}
                    hometownF={favorite.address.city}
                    renderFavF={this.props.renderFav}
                    />
                    </div>
                )
            })        

        ) : (
            <div className="center">Favorite contacts list is empty</div>
        )
        
        return (
            
            <div>
            {favTitle}
            {favContactList}
            <br/><br/>
            </div>
        );
    }
}

export default FavoriteContacts
