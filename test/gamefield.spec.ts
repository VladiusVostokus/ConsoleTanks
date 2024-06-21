import { GameField } from '../src/gamefield';

describe('Gamefield class', () => {
  const HEIGHT: number = 10;
  const WIDTH: number = 10;
  let gameField: GameField;

  beforeEach(() => {
    gameField = new GameField(HEIGHT, WIDTH);
  });

  it('Check size', () => {
    gameField.updateGameField();
    expect(gameField.getHeight()).toBe(HEIGHT);
    expect(gameField.getWidth()).toBe(WIDTH);

    gameField.updateGameField();
    expect(gameField.getHeight()).toBe(HEIGHT);
    expect(gameField.getWidth()).toBe(WIDTH);
  });

  it('Check get and set', () => {
    gameField.updateGameField();
    gameField.setCell(5, 5, '%');
    const cell: string = gameField.getCell(5, 5);
    expect(cell).toBe('%');
  });

  it('Check wall and space values', () => {
    gameField.updateGameField();
    const topWall = gameField.getCell(0, 3);
    const rightWall = gameField.getCell(5, 9);
    const bottomWall = gameField.getCell(9, 4);
    const leftWall = gameField.getCell(6, 0);

    const wall = gameField.wall;

    expect(topWall).toBe(wall);
    expect(rightWall).toBe(wall);
    expect(bottomWall).toBe(wall);
    expect(leftWall).toBe(wall);

    const upperLeftSpace = gameField.getCell(1, 1);
    const upperRightSpace = gameField.getCell(1, 8);
    const lowerRightSpace = gameField.getCell(8, 8);
    const loverLeftSpace = gameField.getCell(8, 1);

    const space = gameField.space;

    expect(upperLeftSpace).toBe(space);
    expect(upperRightSpace).toBe(space);
    expect(lowerRightSpace).toBe(space);
    expect(loverLeftSpace).toBe(space);
  });
});
