import { MOVE_ROCK, MOVE_PAPER, MOVE_SCISSORS, MOVE_SPOCK, MOVE_LIZARD } from './game.component';


export function checkWinner(move1: string, move2: string) : any {

    switch (move1) {

        case MOVE_ROCK:
            switch (move2) {
                case MOVE_ROCK:
                    return { result: 0, action: 'have no effect to' };
                case MOVE_PAPER:
                    return { result: -1, action: 'covered by' };
                case MOVE_SCISSORS:
                    return { result: 1, action: 'crushes' };
                case MOVE_SPOCK:
                    return { result: -1, action: 'vaporized by' };
                case MOVE_LIZARD:
                    return { result: 1, action: 'crushes' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case MOVE_PAPER:
            switch (move2) {
                case MOVE_ROCK:
                    return { result: 1, action: 'covers' };
                case MOVE_PAPER:
                    return { result: 0, action: 'have no effect to' };
                case MOVE_SCISSORS:
                    return { result: -1, action: 'cutted by' };
                case MOVE_SPOCK:
                    return { result: 1, action: 'disprove' };
                case MOVE_LIZARD:
                    return { result: -1, action: 'eated' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case MOVE_SCISSORS:
            switch (move2) {
                case MOVE_ROCK:
                    return { result: -1, action: 'crushed by' };
                case MOVE_PAPER:
                    return { result: 1, action: 'cut' };
                case MOVE_SCISSORS:
                    return { result: 0, action: 'have no effect to' };
                case MOVE_SPOCK:
                    return { result: -1, action: 'smashed by' };
                case MOVE_LIZARD:
                    return { result: 1, action: 'decapitates' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case MOVE_SPOCK:
            switch (move2) {
                case MOVE_ROCK:
                    return { result: 1, action: 'vaporizes' };
                case MOVE_PAPER:
                    return { result: -1, action: 'disproved' };
                case MOVE_SCISSORS:
                    return { result: 1, action: 'smashes' };
                case MOVE_SPOCK:
                    return { result: 0, action: 'have no effect to' };
                case MOVE_LIZARD:
                    return { result: -1, action: 'poisoned by' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        case MOVE_LIZARD:
            switch (move2) {
                case MOVE_ROCK:
                    return { result: -1, action: 'crushed by' };
                case MOVE_PAPER:
                    return { result: 1, action: 'eat' };
                case MOVE_SCISSORS:
                    return { result: -1, action: 'decapitated by' };
                case MOVE_SPOCK:
                    return { result: 1, action: 'poisons' };
                case MOVE_LIZARD:
                    return { result: 0, action: 'have no effect to' };
                default:
                    return { result: 0, action: 'have no effect to' };
            }

        default :
            return { result: 0, action: 'have no effect to' };

    }

}




