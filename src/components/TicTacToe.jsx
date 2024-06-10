import React, { useEffect, useState } from 'react'
import Board from './Board'
import GameOver from './GameOver'
import GameState from './GameState'


const TicTacToe = () => {

    const player_x = "X"
    const player_o = "O"

    const winCombinations = [
        {combo: [0,1,2], strikeClass: "strike-row-1"},
        {combo: [3,4,5], strikeClass: "strike-row-2"},
        {combo: [6,7,8], strikeClass: "strike-row-3"},

        {combo: [0,3,6], strikeClass: "strike-column-1"},
        {combo: [1,4,7], strikeClass: "strike-column-2"},
        {combo: [2,5,8], strikeClass: "strike-column-3"},

        {combo: [0,4,8], strikeClass: "strike-diagonal-1"},
        {combo: [2,4,6], strikeClass: "strike-diagonal-2"},
    ]

    function checkWinner(tiles, setStrikeClass, setGameState) {
         for(const { combo, strikeClass } of winCombinations) {
            const titleValue1 = tiles[combo[0]];
            const titleValue2 = tiles[combo[1]];
            const titleValue3 = tiles[combo[2]];

            if(
                titleValue1 !== null && titleValue1 === titleValue2 &&
                titleValue1 === titleValue3
            ){
                setStrikeClass(strikeClass)
                if(titleValue1 == player_x) {
                    setGameState(GameState.playerXwins);
                }
                else{
                    setGameState(GameState.playerOwins)
                }
                return;
            }
         }

         const allTiles = tiles.every((tile) => tile !== null);
         if(allTiles){
            setGameState(GameState.draw)
         }
    }

    const[tiles, setTiles] = useState(Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState(player_x)
    const [strikeClass, setStrikeClass] = useState()
    const [gameState, setGameState] = useState(GameState.inProgress)

    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState)
    }, [tiles])

    const handleTileClick = (index) => {

        if(gameState !== GameState.inProgress) {
            return
        }

        if(tiles[index] !== null) {
            return
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn
        setTiles(newTiles)
        if(playerTurn == player_x) {
            setPlayerTurn(player_o)
        }
        else{
            setPlayerTurn(player_x)
        }
    }


    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
            <GameOver gameState={gameState}/>
        </div>
    )
}

export default TicTacToe