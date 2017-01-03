import { RESTART_GAME, MATCH_STEP } from './actions';
import { ActionReducer, Action } from '@ngrx/store';
import { MOVES, MATCH_STATUS_WAIT, MATCH_STATUS_ON_GOING, MATCH_STATUS_FINISHED } from './game/game.component';
import { checkWinner } from './game/rpssl.logic';

var initialState = {
  matchStatus: MATCH_STATUS_WAIT,
  scoreA: 0,
  scoreB: 0,
  playerMove: false,
  computerMove: false,
  result: null,
  resultAction: '',
  matchMoves: []
}


export const gameReducer : ActionReducer<any> = (state : any = initialState, action : Action = {type: '', payload: ''}) => {
  switch (action.type) {
    case RESTART_GAME:
      return Object.assign(state, {
        matchStatus: MATCH_STATUS_ON_GOING,
        scoreA: 0,
        scoreB: 0,
        playerMove: false,
        computerMove: false,
        result: null,
        resultAction: '',
        matchMoves: []
      });

    case MATCH_STEP:
        let newState = Object.assign(state, {
          playerMove: action.payload.move,
          computerMove: MOVES[Math.floor(MOVES.length * Math.random())]
        });
        let matchResult = checkWinner(newState.playerMove, newState.computerMove);

        if (matchResult.result > 0) {
          ++newState.scoreA;
        } else if (matchResult.result < 0) {
          ++newState.scoreB;
        }

        newState.result = matchResult.result;
        newState.resultAction = matchResult.action;

        if (newState.scoreA >= 10 || newState.scoreB >= 10) {
          newState.matchStatus = MATCH_STATUS_FINISHED;
        }

      return newState;
    default:
      return state;
  }
}
