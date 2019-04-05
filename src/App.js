import React, { Component } from 'react';
import SearchBar from './components/SearchBar.jsx'
import Contacts from './components/Contacts.jsx'
import SortBtn from './components/SortBtn.jsx'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      contacts: [],
      search: '',
      fav: []
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


addToFav = (id) => {

  this.state.contacts.map(item => {
  //  let fav = [...this.state.fav, item]
    if(item.id === id) {
      let fav = [...this.state.fav, item]

      // favArr.push(item);
      this.setState({
        fav
      })

    }
    
  })

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

                <Contacts 
                    contacts={this.state.contacts}
                    search={this.state.search}
                    addToFav={this.addToFav}
                />
            </div>
      </div>
    );
  }
}

export default App;
