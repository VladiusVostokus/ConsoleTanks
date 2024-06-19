import { GameField } from './gamefield';
import { Tank } from './tank';

const HEIGHT: number = 20;
const WIDTH: number = 20;

const gameField = new GameField(WIDTH, HEIGHT);
const tank1 = new Tank(3,3);
const tank2 = new Tank(3,10);
const tank3 = new Tank(10,10);
const tank4 = new Tank(10,3);
gameField.updateGameField();
tank1.putTankUp(gameField);
tank2.putTankDown(gameField);
tank3.putTankLeft(gameField);
tank4.putTankRight(gameField);
gameField.showGameField();

