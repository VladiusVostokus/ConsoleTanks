import { GameField } from './gamefield';

const HEIGHT: number = 20;
const WIDTH: number = 20;
const EMPTY_SPACE: string = ' ';

const gameField = new GameField(EMPTY_SPACE, WIDTH, HEIGHT);
gameField.updateGameField();
gameField.showGameField();

