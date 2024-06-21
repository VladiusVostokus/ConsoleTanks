import { Projectile } from '../src/projectile';
import { GameField } from '../src/gamefield';

describe('Projectile class', () => {
  let gamefield: GameField;

  beforeAll(() => {
    gamefield = new GameField(10, 10);
  });

  test('Check correct putting in gamefield', () => {
    gamefield.updateGameField();
    const projectile = new Projectile(3, 3, 'down');
    projectile.putProjectile(gamefield);
    expect(gamefield.getCell(3, 3)).toBe(projectile.symbol);
  });

  test('Check correct move', () => {
    const projectile = new Projectile(5, 5, 'left');
    projectile.moveProjectile();
    expect(projectile.x).toBe(4);
  });

  test('Check correct inside and outside position definition', () => {
    const coorectX: number = 5;
    const coorectY: number = 5;
    const incorrectX: number = 1;
    const incorrectY: number = 1;
    const rightBorder: number = 9;
    const lowerBorder: number = 9;

    const projectile1 = new Projectile(coorectX, coorectY, 'right');
    expect(projectile1.insideBorder(rightBorder, lowerBorder)).toBe(true);

    const projectile2 = new Projectile(incorrectX, coorectY, 'up');
    expect(projectile2.insideBorder(rightBorder, lowerBorder)).toBe(false);

    const projectile3 = new Projectile(coorectX, incorrectY, 'up');
    expect(projectile3.insideBorder(rightBorder, lowerBorder)).toBe(false);
  });
});
