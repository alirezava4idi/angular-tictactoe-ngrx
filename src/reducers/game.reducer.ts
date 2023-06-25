import { createReducer, on } from '@ngrx/store';
import { Game } from 'src/models/game.models';

import { Player, Weapons } from '../models/player.model';

import * as GameActions from '../actions/game.actions';


const pa: Player = {
    name: 'A',
    weapon: Weapons.CIRCLE
}
const pb: Player = {
    name: 'B',
    weapon: Weapons.CROSS
}



const initalState: Game = {
    board: ['','','','','','','','','',],
    players: [pa, pb],
    turn: randomNumber() === 1 ? pa : pb,
    whoClicked: null,
    isFinished: false,
    winner: null,
    status: 'Playing',
    board_winner_state: [],
} 

function randomNumber()
{
    return Math.floor(Math.random() * 2);
}

function move(state: Game , index: number){

    if (state.board[index] !== '') return state;

    const type = state.turn?.weapon === Weapons.CROSS ? 'X' : 'O';
    
    const newBoard = state.board.map((value, i) => (i === index && value === '') ? value = type : value)
    const newTurn = state.turn === pa ? pb : pa; 
    const updated: Game = {...state, board: [...newBoard], whoClicked: state.turn, turn: newTurn }
    return updated
}

function checkifFinished(state: Game){
    let updatedState: Game = checkWinner(state);

    if (updatedState.winner !== null)
    {
        updatedState = {...updatedState, isFinished: true, status: 'Finished'}
        return updatedState;
    }

    for(let i = 0; i < state.board.length; i++)
    {
        
        if (state.board[i] === ''){
            return updatedState
        }
    }
    updatedState = {...updatedState, isFinished: true}
    updatedState = checkWinner(updatedState);
    return updatedState;
}

function checkWinner(state: Game)
{

    const board = state.board;
    if ((board[0] === board[1] && board[1] === board[2]) && board[0] !== '')
    {
        const player = board[0] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[0] = true;
        winnerState[1] = true;
        winnerState[2] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else if ((board[0] === board[3] && board[3] === board[6]) && board[0] !== '')
    {
        const player = board[0] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[0] = true;
        winnerState[3] = true;
        winnerState[6] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else if ((board[2] === board[5] && board[5] === board[8]) && board[2] !== '')
    {
        const player = board[2] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[2] = true;
        winnerState[5] = true;
        winnerState[8] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else if ((board[6] === board[7] && board[7] === board[8]) && board[6] !== '')
    {
        const player = board[6] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[6] = true;
        winnerState[7] = true;
        winnerState[8] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else if ((board[1] === board[4] && board[4] === board[7]) && board[1] !== '')
    {
        const player = board[1] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[1] = true;
        winnerState[4] = true;
        winnerState[7] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else if ((board[3] === board[4] && board[4] === board[5]) && board[3] !== '')
    {
        const player = board[3] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[3] = true;
        winnerState[4] = true;
        winnerState[5] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else if ((board[0] === board[4] && board[4] === board[8]) && board[0] !== '')
    {
        const player = board[0] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[0] = true;
        winnerState[4] = true;
        winnerState[8] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else if ((board[2] === board[4] && board[4] === board[6]) && board[2] !== '')
    {
        const player = board[2] === 'X' ? pb : pa;
        const winnerState = [];
        winnerState[2] = true;
        winnerState[4] = true;
        winnerState[6] = true;
    
        return {...state, winner: player, board_winner_state: winnerState}
    }
    else {
        if(state.isFinished && state.winner === null)
        {
            return {...state, status: 'Draw'}
        }
        return {...state}
    }
}


export const gameReducer = createReducer(
    initalState,
    on(GameActions.enterGame, state => (state)),
    on(GameActions.randomPlayerPick, (state) => ({...state, turn: state.players[randomNumber()]})),
    on(GameActions.move, (state, { gridIndex }) => (move(state, gridIndex))),
    on(GameActions.gameFinished, state => (checkifFinished(state))),
    on(GameActions.gameReset, (state) => ( 
        {...initalState, turn: randomNumber() === 1 ? pa : pb}
    ))
)
