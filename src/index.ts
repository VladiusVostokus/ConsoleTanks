import { GameField } from './gamefield';
import { Tank } from './tank';

const HEIGHT: number = 20;
const WIDTH: number = 20;

const gameField = new GameField(WIDTH, HEIGHT);
const tank = new Tank(5,5);
gameField.updateGameField();
tank.putTank(gameField);
gameField.showGameField();

