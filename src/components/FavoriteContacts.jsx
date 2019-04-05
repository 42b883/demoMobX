import React, { Component } from 'react';
import FavoriteContactItem from './FavoriteContactItem.jsx';


class FavoriteContacts extends Component {
    render() {

        let favContactList = this.props.contactsF.length ? (
            this.props.contactsF.map(favorite => {
                return (
                    <div>
                        <FavoriteContactItem 
                    // addToFav={this.props.addToFav}
                    key={favorite.id}
                    idF={favorite.id}
                    contactsF={this.props.contactsF}
                    // fav={this.props.fav}
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
            {favContactList}
            <br/><br/>
            </div>
        );
    }
}

export default FavoriteContacts
