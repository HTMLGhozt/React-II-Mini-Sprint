import React, { Component } from 'react';
import { people } from './people.js';
import { PeopleList } from './PeopleList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: [],
    };
  }
  render() {
    return (
      <div className="App">
        <PeopleList people={ this.state.People } />
      </div>
    );
  }
  componentDidMount() {
    this.setState({ People: people })
  }
}

export default App;
