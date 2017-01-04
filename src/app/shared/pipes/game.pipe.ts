import { Pipe, PipeTransform } from '@angular/core';
import { moveLabel } from '../../game/game.component';
import { Move } from '../models/move.model';
/*
 * Convert number in dozens
 * Takes a number argument that defaults to true.
 *
 * Usage:            {{value | dozen}}
 * With decimals:    {{value | dozen: true}}
 *
 */
@Pipe({name: 'moveLabelPipe'})
export class moveLabelPipe implements PipeTransform {
    transform(move: Move): string {
        return moveLabel(move);
    }
}

