/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import * as COSTANTS from '../shared/costants';
import { Move } from '../shared/models/move.model';
import { checkWinner } from './rpssl.logic';


describe('RpsslLogic', () => {
  let result1 = checkWinner( new Move(COSTANTS.MOVE_SCISSORS), new Move(COSTANTS.MOVE_ROCK));
  it('Scissors lose from Rock', () => expect( result1.result ).toBe( -1 ));

  let result2 = checkWinner( new Move(COSTANTS.MOVE_SCISSORS), new Move(COSTANTS.MOVE_PAPER));
  it('Scissors win with paper', () => expect( result2.result ).toBe( 1 ));

  let result3 = checkWinner( new Move(COSTANTS.MOVE_SPOCK), new Move(COSTANTS.MOVE_SPOCK));
  it('Spock tie with spock', () => expect( result3.result ).toBe( 0 ));
});



