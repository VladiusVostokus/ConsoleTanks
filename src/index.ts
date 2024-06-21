import { GameField } from './gamefield';
import { Player } from './player';
import { Enemy } from './enemy';
import readline from 'readline';
import process from 'process';
import { options } from '@stlib/utils';

const HEIGHT: number = Number(options?.size ?? 20);
const WIDTH: number = Number(options?.size ?? 20);
const GAME_UPDATE_TIMEOUT: number = 60;
const ENEMY_MOVE_TIMEOUT: number = 500 / Number(options?.difficulty || 1);
const ENEMY_FIRE_TIMEOUT: number = 1000 / Number(options?.difficulty || 1);

const gameField = new GameField(WIDTH, HEIGHT);
const player = new Player(9, 9, WIDTH, HEIGHT);
const enemy = new Enemy(5, 5, WIDTH, HEIGHT);

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

const updateGame = () => {
  console.clear();
  gameField.updateGameField();
  player.putTank(gameField);
  enemy.putTank(gameField);
  player.updateProjectiles(gameField);
  enemy.updateProjectiles(gameField);
  gameField.showGameField();
};

process.stdin.on('keypress', (button: string) => {
  player.action(button);
});

setInterval(updateGame, GAME_UPDATE_TIMEOUT);
setInterval(() => enemy.moveRandomly(), ENEMY_MOVE_TIMEOUT);
setInterval(() => enemy.fireRandomly(), ENEMY_FIRE_TIMEOUT);
