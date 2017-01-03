import { Pipe, PipeTransform } from '@angular/core';
import { moveLabel } from '../game.component';
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
    transform(move: string): string {
        return moveLabel(move);
    }
}

