import React, { Component } from "react";
import SearchBar from "./components/SearchBar.jsx";
import Contacts from "./components/Contacts.jsx";
import SortBtn from "./components/SortBtn.jsx";
import FavoriteContacts from "./components/FavoriteContacts.jsx";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      search: "",
      fav: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({
        contacts: res.data.slice(0, 5)
      });
    });
  }

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSort = () => {
    const newArr = [...this.state.contacts];
    newArr.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: newArr
    });
  };

  addToFav = contact => {
    const fav = [...this.state.fav, contact];
    this.setState({
      fav
    });
  };

  deleteFav = id => {
    const favRemove = this.state.contacts.filter(item => {
      return item.id !== id;
    });
    this.setState({
      contacts: favRemove
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h4 className="center">Main</h4>
          <SortBtn handleSort={this.handleSort} />

          <SearchBar
            handleSearch={this.handleSearch}
            search={this.state.search}
          />

          <FavoriteContacts favoriteContacts={this.state.fav} />

          <Contacts
            contacts={this.state.contacts}
            search={this.state.search}
            addToFav={this.addToFav}
            deleteFav={this.deleteFav}
          />
        </div>
      </div>
    );
  }
}

export default App;
