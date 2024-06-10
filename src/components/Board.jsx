import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
    return (
        <div className='board'>

            <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)} value={tiles[0]} className="top-border left-border right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(1)} value={tiles[1]} className="top-border right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(2)} value={tiles[2]} className="top-border right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(3)} value={tiles[3]} className="left-border right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(4)} value={tiles[4]} className="right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(5)} value={tiles[5]} className="right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(6)} value={tiles[6]} className="left-border right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(7)} value={tiles[7]} className="right-border bottom-border" />
            <Tile playerTurn onClick={() => onTileClick(8)} value={tiles[8]} className="right-border bottom-border"/>

            <Strike strikeClass={strikeClass}/>
        </div>
    )
}

export default Board