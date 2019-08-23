import React from 'react';
import Player from '../Player/Player';
imprt '.PlayersList.css';

const PlayersList = (props) => {
  <ul className="PlayersList">
    {props.players.map((player, i) => (
        <Player
          key={i}
          name={player.name}
          score={player.score}
          onPlayerScoreChange = {(points) => props.onScoreUpdate(i, points)}
          onPlayerRemove = {props.onPlayerRemove(playerIndex)}
        />)
    )}
  </ul>
}

export default PlayersList;
