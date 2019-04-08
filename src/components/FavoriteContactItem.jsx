import React from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

const FavoriteContactItem = props => {
  const favContactList = (
    <div className="post red card teal">
      <div className="card-content">
        <span className="card-title white-text">{props.nameFavorite}</span>
        <p>username: {props.usernameFavorite}</p>
        <p>email: {props.emailFavorite}</p>
        <p>website: {props.websiteFavorite}</p>
        <p>phone: {props.phoneFavorite}</p>
        <p>hometown: {props.hometownFavorite}</p>
        <br />
      </div>
    </div>
  );
  return <div>{favContactList}</div>;
};

FavoriteContactItem.propTypes = {
  ContactsStore: PropTypes.object.isRequired,
  usernameFavorite: PropTypes.string.isRequired,
  emailFavorite: PropTypes.string.isRequired,
  nameFavorite: PropTypes.string.isRequired,
  websiteFavorite: PropTypes.string.isRequired,
  phoneFavorite: PropTypes.string.isRequired,
  hometownFavorite: PropTypes.string.isRequired
};

export default inject("ContactsStore")(observer(FavoriteContactItem));
