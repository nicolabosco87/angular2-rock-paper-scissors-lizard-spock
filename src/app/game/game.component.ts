import { Component, OnInit } from '@angular/core';
import { AppState } from '../interfaces';
import { Store } from '@ngrx/store';


export const MATCH_STATUS_WAIT = 0;
export const MATCH_STATUS_ON_GOING = 1;
export const MATCH_STATUS_FINISHED = 2;

export const MOVE_ROCK = 'ro';
export const MOVE_PAPER = 'pa';
export const MOVE_SCISSORS = 'sc';
export const MOVE_SPOCK = 'sp';
export const MOVE_LIZARD = 'li';

export const MOVES = [
  MOVE_ROCK,
  MOVE_PAPER,
  MOVE_SCISSORS,
  MOVE_SPOCK,
  MOVE_LIZARD
]

export function moveLabel(move) {
  switch (move) {
    case MOVE_ROCK:
      return 'Rock';
    case MOVE_PAPER:
      return 'Paper';
    case MOVE_SCISSORS:
      return 'Scissors';
    case MOVE_SPOCK:
      return 'Spock';
    case MOVE_LIZARD:
      return 'Lizard';
    default:
      return '';
  }
}

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public gameReducer;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.gameReducer = this.store.select<any>('gameReducer');
  }

}
