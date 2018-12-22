import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserAddContainer from './UserAddContainer';
import UserListContainer from './UserListContainer';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
    newUser: {}
  };
 addUser = event => {
   event.preventDefault();
   const uFirstNAme = event.target.userFirstName.value;
   const uLastName = event.target.userLastName.value;
   const uName = event.target.userName.value;
   const newUser = {
     firstName: uFirstNAme, 
     lastName: uLastName, 
     userName: uName,
     games: 0
   };
   const that = this;
   that.setState((prevState) => 
    {
     const userAlreadyExists = prevState.users.find(user => user.userName === newUser.userName);
     if( !userAlreadyExists ) {
       return {
             users:[...prevState.users, newUser]
       }
     }else { 
       window.alert("User name must be unique!");
     }
    });
 }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<UserAddContainer handleAdd={this.addUser}/>
		<UserListContainer users={this.state.users} />
      </div>
    );
  }
}

export default App;
