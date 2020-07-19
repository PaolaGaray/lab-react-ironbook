import React, { Component } from 'react';
//import linkedinlogo from './linkedin.png'
import users from './users';
import './App.css';

class App extends Component {

  state = {
    search: '',
    student: true,
    teacher: false,
    campus: '',
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {

    const options = [...new Set(users.map(user => user.campus))].map(campus =>
      <option value={campus} key={campus}>{campus}</option>
    )

    const filteredUsers = users.filter(user =>
      `${user.firstName}${user.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())
      && this.state[user.role]
      && (user.campus === this.state.campus || !this.state.campus)
    )

    const usersList = filteredUsers.map(user =>
      <tr key={user.id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        <td>
          {user.linkedin &&
            <a href={user.linkedin}>

            </a>}
        </td>
      </tr>
    );
    return (
      <div className="container" >
        <div>
          <h1>IronBook</h1>
          <div className="filters">
            <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
            <label>
              Student
            <input
                name="student"
                type="checkbox"
                checked={this.state.student}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Teacher
            <input
                name="teacher"
                type="checkbox"
                checked={this.state.teacher}
                onChange={this.handleInputChange} />
            </label>
            <select name="campus" value={this.state.campus} onChange={this.handleInputChange}>
              <option value="">All</option>
              {options}
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Campus</td>
                <td>Role</td>
                <td>Links</td>
              </tr>
            </thead>
            <tbody>
              {usersList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
