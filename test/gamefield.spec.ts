import { GameField } from '../src/gamefield';

const HEIGHT: number = 10;
const WIDTH: number = 10;

describe('Check properties of gamefiedl', () => {
    it('Check size', () => {
        const gameField = new GameField(WIDTH, HEIGHT);
        gameField.updateGameField();
        expect(gameField.getHeight()).toBe(HEIGHT);
        expect(gameField.getWidth()).toBe(WIDTH);

        gameField.updateGameField();
        expect(gameField.getHeight()).toBe(HEIGHT);
        expect(gameField.getWidth()).toBe(WIDTH);
    });

    it('Check get and set', () => {
        const gameField = new GameField(WIDTH, HEIGHT);
        gameField.updateGameField();
        gameField.setCell(5, 5,'%');
        const cell:string = gameField.getCell(5,5);
        expect(cell).toBe('%');
    });

    it('Check wall and space values', () => {
        const gameField = new GameField(WIDTH, HEIGHT);
        gameField.updateGameField();
        const topWall = gameField.getCell(0,3);
        const rightWall = gameField.getCell(5,9);
        const bottomWall = gameField.getCell(9,4);
        const leftWall = gameField.getCell(6,0);

        expect(topWall).toBe('#');
        expect(rightWall).toBe('#');
        expect(bottomWall).toBe('#');
        expect(leftWall).toBe('#');

        const upperLeftSpace = gameField.getCell(1,1);
        const upperRightSpace = gameField.getCell(1,8);
        const lowerRightSpace = gameField.getCell(8,8);
        const loverLeftSpace = gameField.getCell(8,1);

        expect(upperLeftSpace).toBe(' ');
        expect(upperRightSpace).toBe(' ');
        expect(lowerRightSpace).toBe(' ');
        expect(loverLeftSpace).toBe(' ');
    });
});
  