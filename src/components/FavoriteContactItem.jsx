import React from "react";
import { observer, inject } from "mobx-react";

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

export default inject("ContactsStore")(observer(FavoriteContactItem));
