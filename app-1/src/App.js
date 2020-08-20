//this is an event handler


import React, { Component } from 'react'; // links app.js with react which is stored in node_modules. Also links Component 
import './App.css'; // links app.js with app.css to allow full application functionality

class App extends Component { //creates a class component called 'App'
  constructor() { // this is a method that is automatically called during the creation of an object from a class. The Constructor aids in constructing things
    super(); // super is used to call the parent function of an object

    this.state = { //property under class, a place to hold data and user input
      message: "" //message is an empty string to allow the user to store their own data into it
    };
  }

  handleChange(value) { //runs on every keystroke to give instant feedback 
    this.setState( {  message: value }); //this will rerender when the message box has a value
  }

  render() { // render is the term to run the code
    return ( // return the items in the below div
      <div className="App">
<input onChange={e => this.handleChange(e.target.value)}  type="text" />
<p>{this.state.message}</p>
      </div>
    );
  }
}

export default App; // exports app.js to allow other files to use this code or data
