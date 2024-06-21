import { GameField } from './gamefield';
import { Player } from './player';
import readline from 'readline';
import process from 'process';
import { options } from '@stlib/utils';

const HEIGHT: number = Number(options?.size ?? 20);
const WIDTH: number = Number(options?.size ?? 20);
const TIMEOUT: number = 60;

const gameField = new GameField(WIDTH, HEIGHT);
const player = new Player(9, 9, WIDTH, HEIGHT);

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

const updateGame = () => {
  console.clear();
  gameField.updateGameField();
  player.putTank(gameField);
  player.updateProjectiles(gameField);
  gameField.showGameField();
};

process.stdin.on('keypress', (button: string) => {
  player.action(button);
});

setInterval(updateGame, TIMEOUT);
