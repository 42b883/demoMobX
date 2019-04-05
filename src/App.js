import React, { Component } from 'react';
import SearchBar from './components/SearchBar.jsx'
import Contacts from './components/Contacts.jsx'
import SortBtn from './components/SortBtn.jsx'
import FavoriteContacts from './components/FavoriteContacts.jsx'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      contacts: [],
      search: '',
      fav: [],
      renderFav: false
  }
  }
  
componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            this.setState({
                contacts: res.data.slice(0,5)
            })
        })
}

handleSearch = (e) => {
    this.setState({
        search: e.target.value    
    })
}

handleSort = () => {            
  let newArr = [...this.state.contacts]
  newArr.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  })
  this.setState({
    contacts: newArr
  })
}

addToFav = (contact) => {
  console.log('console.log => ', contact)
  let fav = this.state.fav;
  // let renderFav = this.state.renderFav;
  fav.push(contact)

  this.setState({
    fav,
    renderFav: true
  })
 
  //  this.state.contacts.splice((contact.id-1), 1)
  // this.setState({
    contacts: this.state.contacts.splice((contact.id-1), 1)
  // })
  console.log("id: todel:::: ", contact.id)
  console.log("bool:",this.state.renderFav)
  console.log(this.state.fav)
}

  render() {
    return (
      <div className="App">
         <div className="container">
                <h4 className="center">Main</h4>
                <SortBtn 
                handleSort={this.handleSort}
                />

                <SearchBar 
                handleSearch={this.handleSearch}
                search={this.state.search}
                />

                <FavoriteContacts 
                    contacts={this.state.contacts}
                    contactsF={this.state.fav}
                    // fav={this.state.fav}
                    search={this.state.search}
                    addToFav={this.addToFav}
                    renderFav={this.state.renderFav}
                />

                <Contacts 
                    contacts={this.state.contacts}
                    contactsF={this.state.fav}
                    // fav={this.state.fav}
                    search={this.state.search}
                    addToFav={this.addToFav}
                    renderFav={this.state.renderFav}
                />
               
            </div>
      </div>
    );
  }
}

export default App;
