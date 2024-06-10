import React from 'react'
import GameState from './GameState';

const GameOver = ({ gameState }) => {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerOwins:
          return <div className='game-over'>O - Победил</div>;
        case GameState.playerXwins:
          return <div className='game-over'>X - Победил</div>;
        case GameState.draw:
          return <div className='game-over'>Ничья</div>;
        default:
            return <></>;
    }
}

export default GameOver