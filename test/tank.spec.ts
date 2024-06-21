import { Tank } from '../src/tank';
import { GameField } from '../src/gamefield';

describe('Tank class', () => {
  const X: number = 2;
  const Y: number = 2;
  const RIGHT_WALL: number = 10;
  const LOWER_WALL: number = 10;
  const HEIGHT: number = 10;
  const WIDTH: number = 10;

  describe('Check put tank', () => {
    const tank = new Tank(Y, X, RIGHT_WALL, LOWER_WALL);
    const gameField = new GameField(WIDTH, HEIGHT);
    gameField.updateGameField();
    tank.putTank(gameField);
    expect(gameField.getCell(2, 3)).toBe('#');
  });

  describe('Tank turns', () => {
    const tank = new Tank(Y, X, RIGHT_WALL, LOWER_WALL);

    it('Check turn left', () => {
      tank.turnLeft();
      expect(tank.x).toBe(1);
      expect(tank.curPos).toEqual([
        [' ', '@', '@'],
        ['#', '#', '#'],
        [' ', '@', '@'],
      ]);
    });

    it('Check turn right', () => {
      tank.turnRight();
      expect(tank.x).toBe(2);
      expect(tank.curPos).toEqual([
        ['@', '@', ' '],
        ['#', '#', '#'],
        ['@', '@', ' '],
      ]);
    });

    it('Check turn down', () => {
      tank.turnDown();
      expect(tank.y).toBe(3);
      expect(tank.curPos).toEqual([
        ['@', '#', '@'],
        ['@', '#', '@'],
        [' ', '#', ' '],
      ]);
    });

    it('Check turn up', () => {
      tank.turnUp();
      expect(tank.y).toBe(2);
      expect(tank.curPos).toEqual([
        [' ', '#', ' '],
        ['@', '#', '@'],
        ['@', '#', '@'],
      ]);
    });
  });

  describe('Check tank not out field', () => {
    it('Upper and left borders', () => {
      const tank = new Tank(1, 1, RIGHT_WALL, LOWER_WALL);
      tank.turnUp();
      expect(tank.y).toBe(1);
      tank.turnLeft();
      expect(tank.x).toBe(1);
    });

    it('Lower and right borders', () => {
      const tank = new Tank(6, 6, RIGHT_WALL, LOWER_WALL);
      tank.turnDown();
      expect(tank.y).toBe(6);
      tank.turnRight();
      expect(tank.x).toBe(6);
    });
  });
});
