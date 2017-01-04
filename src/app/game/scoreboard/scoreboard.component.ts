import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RESTART_GAME } from '../../actions';
import { AppState } from '../../shared/interfaces';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  @Input() state: AppState;

  constructor(private store: Store<AppState>) { }

  ngOnInit() { }

  restartGame() {
    this.store.dispatch({type: RESTART_GAME, payload: {}});
  }

}
