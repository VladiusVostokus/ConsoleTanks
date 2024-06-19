import { GameField } from './gamefield';

const HEIGHT: number = 20;
const WIDTH: number = 20;

const gameField = new GameField(WIDTH, HEIGHT);
gameField.updateGameField();
gameField.showGameField();

