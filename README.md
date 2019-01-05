## The Application 
A React app that lets add a user's first name, last name, and
username.

## Run The Application

`npm install`    
`npm start`


![ScreenShot](src/img/initial.png)  

When the user is added, the number of games that he/she has played is
defaulted to 0. Each username has to be unique, so we cannot add multiple users
with the same username. When someone clicks "Add" but the username already
exists, the app dose not allow for a duplicate user to be added and
show an error message instead.If someone tries to add a user when one of the fields is empty, 
the "Add" button will be disabled.


![ScreenShot](src/img/showPlayedGames.png)  

The app also display a list of users, specifically their usernames
and the number of games they've played (which is defaulted to 0). 


![ScreenShot](src/img/hidePlayedGames.png)  

We also have a button that lets us toggle between showing and hiding
the number of games the users have played. For example, the button can start
out as "Hide the Number of Games Played" and the app can display "username1
played 0 games." Clicking that button changes the button text to
"Show the Number of Games Played" and the displayed username and score can be
changed to "username1 played \* games."
