import React, { Component } from 'react';
import './App.css';
import AddPlayer from './component/AddPlayer/AddPlayer';
import PlayersList from './componets/PlayersList/PlayersList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5,
        }
        {
          name: 'Antos',
          score: 0,
        }
      ]
    }
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index ==== playerIndex) {
          return {...player, score: player.score + scoreChange};
        }
        return player;
      })
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }

    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onPlayerRemove = (playerIndex) => {
    this.setState({
      players: this.state.players.filter(player => index !== playerIndex)
    })
  }

  render() {
    return (
      <div className="App">
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate}/>
        <AddPlayer onPlayerAdd={this.onPlayerAdd}/>
      </div>
    );
  }
}

export default App;
