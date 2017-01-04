import { RESTART_GAME, MATCH_STEP } from './actions';
import { ActionReducer, Action } from '@ngrx/store';
import { checkWinner } from './game/rpssl.logic';
import { Move } from './shared/models/move.model';
import { AppState } from './shared/interfaces';
import * as COSTANTS from './shared/costants';



const initialState: AppState = {
  matchStatus: COSTANTS.MATCH_STATUS_WAIT,
  scoreA: 0,
  scoreB: 0,
  playerMove: new Move(''),
  computerMove: new Move(''),
  result: null,
  resultAction: '',
  matchMoves: []
}


export const gameReducer : ActionReducer<AppState> = (state : AppState = initialState, action : Action = {type: '', payload: ''}) => {
  switch (action.type) {
    case RESTART_GAME:
      return Object.assign(state, {
        matchStatus: COSTANTS.MATCH_STATUS_ON_GOING,
        scoreA: 0,
        scoreB: 0,
        playerMove: new Move(''),
        computerMove: new Move(''),
        result: null,
        resultAction: '',
        matchMoves: []
      });


    case MATCH_STEP:
        let newState = Object.assign(state, {
          playerMove: new Move(action.payload.move),
          computerMove: new Move(action.payload.computerMove)
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
          newState.matchStatus = COSTANTS.MATCH_STATUS_FINISHED;
        }

      return newState;
    default:
      return state;
  }
}
