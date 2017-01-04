/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { gameReducer } from './reducers';
import { AppState } from './shared/interfaces';
import { Move } from './shared/models/move.model';
import * as COSTANTS from './shared/costants';
import * as ACTIONS from './actions';

describe('Game Reducer', () => {

  const state1: AppState = {
    matchStatus: COSTANTS.MATCH_STATUS_ON_GOING,
    scoreA: 4,
    scoreB: 6,
    playerMove: new Move(COSTANTS.MOVE_LIZARD),
    computerMove: new Move(COSTANTS.MOVE_LIZARD),
    result: 0,
    resultAction: 'tie',
    matchMoves: []
  };

  const actualState1: AppState = gameReducer(state1, {type: ACTIONS.RESTART_GAME , payload: ''});

  const expectedState1: AppState = {
    matchStatus: COSTANTS.MATCH_STATUS_ON_GOING,
    scoreA: 0,
    scoreB: 0,
    playerMove: new Move(''),
    computerMove: new Move(''),
    result: null,
    resultAction: '',
    matchMoves: []
  };

  it('Should restart game', () => expect( actualState1 ).toEqual( expectedState1 ));


  const state2: AppState = {
    matchStatus: COSTANTS.MATCH_STATUS_ON_GOING,
    scoreA: 9,
    scoreB: 2,
    playerMove: new Move(COSTANTS.MOVE_LIZARD),
    computerMove: new Move(COSTANTS.MOVE_LIZARD),
    result: 0,
    resultAction: 'tie',
    matchMoves: []
  };

  const actualState2: AppState = gameReducer(state2, {type: ACTIONS.MATCH_STEP , payload: {move: COSTANTS.MOVE_SPOCK, computerMove: COSTANTS.MOVE_ROCK} });

  const expectedState2: AppState = {
    matchStatus: COSTANTS.MATCH_STATUS_FINISHED,
    scoreA: 10,
    scoreB: 2,
    playerMove: new Move(COSTANTS.MOVE_SPOCK),
    computerMove: new Move(COSTANTS.MOVE_ROCK),
    result: 1,
    resultAction: 'vaporizes',
    matchMoves: []
  };

  it('Should end game with a winner', () => expect( actualState2 ).toEqual( expectedState2 ));

});

