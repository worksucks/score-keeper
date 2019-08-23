import React from 'react';
import './Player.css';

const Player = (props) => {
  <li className="Player">
    <span className="Player___name">{props.name}</span>
    <span className="Player___score">{props.score}</span>
    <span className="Player___button" onClick={() => props.onPlayerScoreChange(1)} > + </span>
    <span className="Player___button" onClick={() => props.onPlayerScoreChange(-1)}>-</span>
    //This line is aadded and needs to be checked
  </li>
}

export default Player;
