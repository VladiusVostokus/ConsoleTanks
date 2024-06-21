import { GameField } from '../src/gamefield';
import { Enemy } from '../src/enemy';

describe('Enemy Class', () => {
  let gameField: GameField;
  let enemy: Enemy;

  beforeEach(() => {
    gameField = new GameField(20, 20);
    enemy = new Enemy(5, 5, 20, 20);
  });

  test('should initialize with correct position', () => {
    expect(enemy.x).toBe(5);
    expect(enemy.y).toBe(5);
  });

  test('should move within bounds', () => {
    enemy.moveRandomly();
    expect(enemy.x).toBeGreaterThanOrEqual(1);
    expect(enemy.x).toBeLessThanOrEqual(16);
    expect(enemy.y).toBeGreaterThanOrEqual(1);
    expect(enemy.y).toBeLessThanOrEqual(16);
  });

  test('should fire projectiles', () => {
    enemy.fireRandomly();
    expect(enemy.projectilesCount).toBeLessThanOrEqual(1);
  });

  test('should update projectiles', () => {
    enemy.fireRandomly();
    const initialProjectileCount = enemy.projectilesCount;
    enemy.updateProjectiles(gameField);
    expect(enemy.projectilesCount).toBeLessThanOrEqual(initialProjectileCount);
  });

  test('should not move outside boundaries', () => {
    for (let i = 0; i < 100; i++) {
      enemy.moveRandomly();
      expect(enemy.x).toBeGreaterThanOrEqual(1);
      expect(enemy.x).toBeLessThanOrEqual(16);
      expect(enemy.y).toBeGreaterThanOrEqual(1);
      expect(enemy.y).toBeLessThanOrEqual(16);
    }
  });
});
