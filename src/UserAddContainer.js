import React, { Component } from 'react';

class UserAddContainer extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: ""
  }
  
  handleFNChange(event){
   this.setState({firstName:event.target.value});
  }
  handleLNChange(event){
    this.setState({lastName:event.target.value});
  }
  handleUNChange(event){
    this.setState({userName:event.target.value});
  }
  
  disableAdd(){
    return this.state.firstName === "" || this.state.lastName === "" || this.state.userName === "";
  }
  
   render() {
    return (
     <form onSubmit={this.props.handleAdd}>
      	<input key="userFirstName" type="text" placeholder="enter user first name" name="userFirstName" onChange={(event) => this.handleFNChange(event)}/><p/>
      	<input key="userLastName" placeholder="enter user last name" name="userLastName" value={this.state.lastName} onChange={(event) => this.handleLNChange(event)}/><p/>
      	<input key="userName"  placeholder="enter user name" name="userName" value={this.state.userName} onChange={(event) => this.handleUNChange(event)}/><p/>
      	<button disabled={this.disableAdd()}>Add</button>
      </form>
    );
  }
}

export default UserAddContainer;