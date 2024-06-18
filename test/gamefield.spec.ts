import { GameField } from '../src/gamefield';

const gameField = new GameField(' ', 10, 10);

describe('Check properties of gamefiedl', () => {
    it('Check size', () => {
        gameField.updateGameField();
        expect(gameField.getHeight()).toBe(10);
        expect(gameField.getWidth()).toBe(10);

        gameField.updateGameField();
        expect(gameField.getHeight()).toBe(10);
        expect(gameField.getWidth()).toBe(10);
    });

    it('Check get and set', () => {
        gameField.updateGameField();
        gameField.setCell(5, 5,'%');
        const cell:string = gameField.getCell(5,5);
        expect(cell).toBe('%');
    });
});
  