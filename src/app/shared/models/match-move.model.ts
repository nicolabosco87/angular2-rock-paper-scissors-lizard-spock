import { Move } from './move.model';

export class MatchMove {
    move1: Move;
    move2: Move;
    result: number;
    resultAction: string;

    constructor (move1: Move, move2: Move, result: number, resultAction: string) {
        this.move1 = move1;
        this.move2 = move2;
        this.result = result;
        this.resultAction = resultAction;
    }
}