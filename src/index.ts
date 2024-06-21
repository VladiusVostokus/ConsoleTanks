import { GameField } from './gamefield';
import { Player } from './player';
import { Enemy } from './enemy';
import readline from 'readline';
import process from 'process';
import { options } from '@stlib/utils';

const HEIGHT: number = Number(options?.size ?? 20);
const WIDTH: number = Number(options?.size ?? 20);
const GAME_UPDATE_TIMEOUT: number = 60;

const setDifficulty = () => {
  if (options?.difficulty && Number(options.difficulty) <= 10) {
    return Number(options.difficulty);
  } else if (options?.difficulty && Number(options.difficulty) > 10) {
    return 10;
  }
  return 1;
}

const DIFFICULTY_LEVEL = setDifficulty();
const ENEMY_MOVE_TIMEOUT: number = 500 / DIFFICULTY_LEVEL;
const ENEMY_FIRE_TIMEOUT: number = 1000 / DIFFICULTY_LEVEL;
const PLAYER_SHOOT_TIMEOUT: number = 500 * DIFFICULTY_LEVEL;

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

  if (player.checkCollisionWithEnemies(enemies)) {
    console.log('Game Over! Player crashed into enemy.');
    process.exit(0);
  }

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
