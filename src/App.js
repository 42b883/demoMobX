import React, { Component } from 'react';
// import Main from './components/Main.jsx';
import SearchBar from './components/SearchBar.jsx'
import Contacts from './components/Contacts.jsx'
import axios from 'axios'

import './App.css';

class App extends Component {
  state = {   
    contacts: [],
    search: ''
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

  render() {
    return (
      <div className="App">
         <div className="container">
                <h4 className="center">Main</h4>
                <SearchBar 
                handleSearch={this.handleSearch}
                search={this.state.search}
                />

                <Contacts 
                    contacts={this.state.contacts}
                    search={this.state.search}
                />
            </div>
      </div>
    );
  }
}

export default App;
