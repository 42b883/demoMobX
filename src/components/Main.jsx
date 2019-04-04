// import React, { Component } from 'react'
// import SearchBar from './SearchBar.jsx'
// import Contacts from './Contacts.jsx'
// import axios from 'axios'

// class Main extends Component {
//     state = {   
//         contacts: [],
//         search: ''
//     }

//     componentDidMount() {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(res => {
//                 console.log(res)
//                 this.setState({
//                     contacts: res.data.slice(0,5)
//                 })
//             })
//     }

//     handleSearch = (e) => {
//         this.setState({
//             search: e.target.value    
//         })
//     }

//     render() {
       
//         return (
//             <div className="container">
//                 <h4 className="center">Main</h4>
//                 <SearchBar 
//                 handleSearch={this.handleSearch}
//                 search={this.state.search}
//                 />

//                 <Contacts 
//                     contacts={this.state.contacts}
//                     search={this.state.search}
//                 />
//                 </div>

               
//         )
//     }
// }

// export default Main