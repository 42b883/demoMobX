import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import FavoriteContactItem from "./FavoriteContactItem.jsx";

const FavoriteContacts = props => {
  let favTitle = null;
  if (props.favoriteContacts.length) {
    favTitle = (
      <div>
        <h4 className="blue-grey-text">Favorite Contacts</h4>
        <br />
      </div>
    );
  }
  const favContactList = props.favoriteContacts.length ? (
    props.favoriteContacts.map(favorite => {
      return (
        <FavoriteContactItem
          key={favorite.id}
          nameFavorite={favorite.name}
          emailFavorite={favorite.email}
          usernameFavorite={favorite.username}
          websiteFavorite={favorite.website}
          phoneFavorite={favorite.phone}
          hometownFavorite={favorite.address.city}
        />
      );
    })
  ) : (
    <div className="center">Favorite contacts list is empty</div>
  );

  return (
    <div>
      {favTitle}
      {favContactList}
      <br />
    </div>
  );
};

FavoriteContacts.propTypes = {
  favoriteContacts: PropTypes.array.isRequired
};

export default inject("ContactsStore")(observer(FavoriteContacts));
