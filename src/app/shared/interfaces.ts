import { Move } from './models/move.model';
import { MatchMove } from './models/match-move.model';

export interface AppState {
  matchStatus: number,
  scoreA: number,
  scoreB: number,
  playerMove: Move,
  computerMove: Move,
  result?: any,
  resultAction: string,
  matchMoves: MatchMove[]
}

