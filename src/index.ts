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
const PLAYER_SHOOT_TIMEOUT: number = 500 * Number(options?.difficulty || 1);

const gameField: GameField = new GameField(WIDTH, HEIGHT);
const player: Player = new Player(9, 9, WIDTH, HEIGHT, PLAYER_SHOOT_TIMEOUT);
const enemies: Enemy[] = [new Enemy(5, 5, WIDTH, HEIGHT)];

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

const updateGame = () => {
  console.clear();
  gameField.updateGameField();
  player.putTank(gameField);
  player.updateProjectiles(gameField);
  enemies.forEach((enemy) => {
    enemy.putTank(gameField);
    enemy.updateProjectiles(gameField);
  });
  gameField.showGameField();
};

process.stdin.on('keypress', (button: string) => {
  player.action(button);
});

setInterval(updateGame, GAME_UPDATE_TIMEOUT);
setInterval(
  () =>
    enemies.forEach((enemy) => {
      enemy.moveRandomly();
    }),
  ENEMY_MOVE_TIMEOUT,
);
setInterval(
  () =>
    enemies.forEach((enemy) => {
      enemy.fireRandomly();
    }),
  ENEMY_FIRE_TIMEOUT,
);

const spawnEnemy = () => {
  if (enemies.length < 3) {
    const randomX = Math.floor(Math.random() * (WIDTH - 4)) + 1;
    const randomY = Math.floor(Math.random() * (HEIGHT - 4)) + 1;
    const newEnemy = new Enemy(randomY, randomX, WIDTH, HEIGHT);
    enemies.push(newEnemy);
  }
};

const randomSpawnTime = () => Math.random() * 5000 + 5000;

const spawnEnemyInterval = () => {
  setTimeout(() => {
    spawnEnemy();
    spawnEnemyInterval();
  }, randomSpawnTime());
};

spawnEnemyInterval();
