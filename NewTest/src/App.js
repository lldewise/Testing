import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Leo', age: 26},
      {name: 'Max', age: 27},
      {name: 'Manu', age: 28}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!')
    // Wrong! this.state.persons[0].name = 'Leo Lopez';
    this.setState({
      persons: [
        {name:  newName, age: 26},
        {name: 'Max', age: 27},
        {name: 'Manu', age: 29}
      ]
    
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Leo', age: 26},
        {name:  event.target.value, age: 27},
        {name: 'Manu', age: 29}
      ]
    
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {

    const style = {
      backgroundColor: findRenderedComponentWithType,
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
       persons = (

        <div>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Leo Lopez!")} changed={this.nameChangedHandler}>My Hobbies: Basketball</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
       </div>

       )
    }

  return (
    <div className="App">
      <h1>Hi, I'm a React APP!!!</h1>
      <p>This is really working!!!</p>
      <button
       style={style}
       onClick={this.togglePersonsHandler}>Switch Name</button>
       {persons}
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?' )) 

  }
}

export default App;
