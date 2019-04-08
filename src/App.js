import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import SearchBar from "./components/SearchBar.jsx";
import Contacts from "./components/Contacts.jsx";
import SortBtn from "./components/SortBtn.jsx";
import FavoriteContacts from "./components/FavoriteContacts.jsx";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.ContactsStore.loadContacts();
  }

  render() {
    const { contacts, fav, search } = this.props.ContactsStore;
    return (
      <div className="App">
        <div className="container">
          <h4 className="center">Main</h4>
          <SortBtn />
          <SearchBar search={search} />
          <FavoriteContacts favoriteContacts={fav} />
          <Contacts contacts={contacts} search={search} />
        </div>
      </div>
    );
  }
}

export default inject("ContactsStore")(observer(App));
