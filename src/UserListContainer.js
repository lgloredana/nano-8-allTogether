import React, { Component } from 'react';

class UserListContainer extends Component {
  state = {
    showGamesInfo : true
  }

toggleGames(){
  this.setState((prevState) => ({ showGamesInfo : !prevState.showGamesInfo }));
}
   render() {
   	 let usersInfo = "";
     let btnMsg = "";
     if (this.state.showGamesInfo) {
       usersInfo= this.props.users.map(user => (<li key="{user.userName}">{user.userName} played  {user.games} games</li>));
	   btnMsg = "Hide the Number of Games Played";
	 } 
     else{
       usersInfo= this.props.users.map(user => (<li key="{user.userName}">{user.userName} played \* games</li>));
	   btnMsg = "Show the Number of Games Played";
     }
      return (
        <div>
          <ol>
             {usersInfo}
          </ol>
        <p/>
        <button onClick={(event) => this.toggleGames(event)}>{btnMsg}</button>
        </div>
      );
  }
}

export default UserListContainer;