import * as COSTANTS from '../shared/costants';
import { Move } from '../shared/models/move.model';

export function checkWinner(move1: Move, move2: Move) : any {

    switch (move1.code) {

        case COSTANTS.MOVE_ROCK:
            switch (move2.code) {
                case COSTANTS.MOVE_ROCK:
                    return { result: 0, action: 'have no effect to' };
                case COSTANTS.MOVE_PAPER:
                    return { result: -1, action: 'covered by' };
                case COSTANTS.MOVE_SCISSORS:
                    return { result: 1, action: 'crushes' };
                case COSTANTS.MOVE_SPOCK:
                    return { result: -1, action: 'vaporized by' };
                case COSTANTS.MOVE_LIZARD:
                    return { result: 1, action: 'crushes' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case COSTANTS.MOVE_PAPER:
            switch (move2.code) {
                case COSTANTS.MOVE_ROCK:
                    return { result: 1, action: 'covers' };
                case COSTANTS.MOVE_PAPER:
                    return { result: 0, action: 'have no effect to' };
                case COSTANTS.MOVE_SCISSORS:
                    return { result: -1, action: 'cutted by' };
                case COSTANTS.MOVE_SPOCK:
                    return { result: 1, action: 'disprove' };
                case COSTANTS.MOVE_LIZARD:
                    return { result: -1, action: 'eated' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case COSTANTS.MOVE_SCISSORS:
            switch (move2.code) {
                case COSTANTS.MOVE_ROCK:
                    return { result: -1, action: 'crushed by' };
                case COSTANTS.MOVE_PAPER:
                    return { result: 1, action: 'cut' };
                case COSTANTS.MOVE_SCISSORS:
                    return { result: 0, action: 'have no effect to' };
                case COSTANTS.MOVE_SPOCK:
                    return { result: -1, action: 'smashed by' };
                case COSTANTS.MOVE_LIZARD:
                    return { result: 1, action: 'decapitates' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case COSTANTS.MOVE_SPOCK:
            switch (move2.code) {
                case COSTANTS.MOVE_ROCK:
                    return { result: 1, action: 'vaporizes' };
                case COSTANTS.MOVE_PAPER:
                    return { result: -1, action: 'disproved' };
                case COSTANTS.MOVE_SCISSORS:
                    return { result: 1, action: 'smashes' };
                case COSTANTS.MOVE_SPOCK:
                    return { result: 0, action: 'have no effect to' };
                case COSTANTS.MOVE_LIZARD:
                    return { result: -1, action: 'poisoned by' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case COSTANTS.MOVE_LIZARD:
            switch (move2.code) {
                case COSTANTS.MOVE_ROCK:
                    return { result: -1, action: 'crushed by' };
                case COSTANTS.MOVE_PAPER:
                    return { result: 1, action: 'eat' };
                case COSTANTS.MOVE_SCISSORS:
                    return { result: -1, action: 'decapitated by' };
                case COSTANTS.MOVE_SPOCK:
                    return { result: 1, action: 'poisons' };
                case COSTANTS.MOVE_LIZARD:
                    return { result: 0, action: 'have no effect to' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        default :
            return { result: 0, action: 'have no effect to' };

    }

}




