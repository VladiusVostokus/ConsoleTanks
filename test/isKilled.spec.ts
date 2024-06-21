import { Tank } from '../src/tank';
import { GameField } from '../src/gamefield';

describe('Whether tank is killed', () => {
  const HEIGHT: number = 10;
  const WIDTH: number = 10;
  const RIGHT_WALL: number = 10;
  const LOWER_WALL: number = 10;
  let gameField: GameField;
  let tank: Tank;

  beforeEach(() => {
    gameField = new GameField(HEIGHT, WIDTH);
    gameField.updateGameField();
    tank = new Tank(1, 1, RIGHT_WALL, LOWER_WALL);
  });
  
  test('Check if not killed if there are no projectiles hitting the tank', () => {
    expect(tank.isKilled(gameField)).toBe(false);
  });

  test('Check if killed if a projectile hits the top left corner of the tank', () => {
    gameField.setCell(1, 1, 'o');
    expect(tank.isKilled(gameField)).toBe(true);
  });

  test('Check if killed if a projectile hits the top middle of the tank', () => {
    gameField.setCell(1, 2, 'o');
    expect(tank.isKilled(gameField)).toBe(true);
  });

  test('Check if killed if a projectile hits the bottom right corner of the tank', () => {
    gameField.setCell(3, 3, 'o');
    expect(tank.isKilled(gameField)).toBe(true);
  });

  test('Check if killed if multiple projectiles hit different parts of the tank', () => {
    gameField.setCell(1, 1, 'o');
    gameField.setCell(2, 3, 'o');
    expect(tank.isKilled(gameField)).toBe(true);
  });
});