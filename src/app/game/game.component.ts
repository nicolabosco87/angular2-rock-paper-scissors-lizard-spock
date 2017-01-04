import { Component, OnInit } from '@angular/core';
import { AppState } from '../shared/interfaces';
import { Store } from '@ngrx/store';
import { Move } from '../shared/models/move.model';
import * as COSTANTS from '../shared/costants';


export function moveLabel(move: Move) {
  switch (move.code) {
    case COSTANTS.MOVE_ROCK:
      return 'Rock';
    case COSTANTS.MOVE_PAPER:
      return 'Paper';
    case COSTANTS.MOVE_SCISSORS:
      return 'Scissors';
    case COSTANTS.MOVE_SPOCK:
      return 'Spock';
    case COSTANTS.MOVE_LIZARD:
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
