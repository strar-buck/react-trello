import React, { Component } from 'react';
import TrelloList from './TrelloList'
import TrelloCard from './TrelloCard'

class App extends Component {
  render() {
    return (
      <div className="container App">
        <h2>Trello</h2>
        <TrelloList />
        <TrelloCard />
      </div>
    );
  }
}

export default App;
