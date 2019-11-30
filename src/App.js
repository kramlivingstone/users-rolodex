import React from 'react';

import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ users: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(searchField.toLowerCase()
    ));
    
    return (
      <div className="App">
        <h1>Users Rolodex</h1>
        <SearchBox 
          placeholder='Search User'
          handleChange={this.handleChange}/>
        <CardList
          users={filteredUsers}
        />
      </div>
    );
  }
}

export default App;
