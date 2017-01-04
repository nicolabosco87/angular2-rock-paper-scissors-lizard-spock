import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/interfaces';
import { MATCH_STEP, RESTART_GAME } from '../../actions';
import * as COSTANTS from '../../shared/costants';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() state: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() { }

  doMove(move) {
    this.store.dispatch({type: MATCH_STEP, payload: { move: move, computerMove: COSTANTS.MOVES[Math.floor(COSTANTS.MOVES.length * Math.random())] }});
  }

  getMessageStyle() {
    if (this.state.result > 0)
      return 'alert-success';

    if (this.state.result < 0)
      return 'alert-danger';

    return 'alert-info';
  }

  restartGame() {
    this.store.dispatch({type: RESTART_GAME, payload: {}});
  }

}
