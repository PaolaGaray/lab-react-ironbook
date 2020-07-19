import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import users from "./users.json";
import UsersList from "./components/UsersList"

class App extends Component {

  state = {
    users: users.slice(0, 80),
  }

  render(){
    return(
      <div>
      <h1>Ironbook</h1>

      <UsersList
      users={this.state.users}
      />

      </div>
    )
  }

}

export default App;
