import { GameField } from './gamefield';
import { DirectionsType, Projectile } from './projectile';

export class Tank {
  private _x: number;
  private _y: number;
  private readonly _rightBorder: number;
  private readonly _lowerBorder: number;
  private _projectiles: Projectile[] = [];
  private _upPos: string[][] = [
    [' ', '#', ' '],
    ['@', '#', '@'],
    ['@', '#', '@'],
  ];
  private _downPos: string[][] = [
    ['@', '#', '@'],
    ['@', '#', '@'],
    [' ', '#', ' '],
  ];
  private _leftPos: string[][] = [
    [' ', '@', '@'],
    ['#', '#', '#'],
    [' ', '@', '@'],
  ];
  private _rightPos: string[][] = [
    ['@', '@', ' '],
    ['#', '#', '#'],
    ['@', '@', ' '],
  ];

  private _curPos: string[][];

  constructor(y: number, x: number, rightWall: number, lowerWall: number) {
    this._y = y;
    this._x = x;
    this._curPos = this._upPos;
    this._rightBorder = rightWall - 1;
    this._lowerBorder = lowerWall - 1;
  }

  putTank(gamefield: GameField) {
    for (let i: number = 0; i < 3; i++) {
      for (let j: number = 0; j < 3; j++) {
        gamefield.setCell(this._y + i, this._x + j, this._curPos[i][j]);
      }
    }
  }

  turnUp() {
    this._curPos = this._upPos;
    if (this._y !== 1) this._y--;
  }

  turnDown() {
    this._curPos = this._downPos;
    if (this._y + 3 !== this._lowerBorder) this._y++;
  }

  turnLeft() {
    this._curPos = this._leftPos;
    if (this._x !== 1) this._x--;
  }

  turnRight() {
    this._curPos = this._rightPos;
    if (this._x + 3 !== this._rightBorder) this._x++;
  }

  fire() {
    let fireX: number = this._x;
    let fireY: number = this._y;
    let direction: DirectionsType = 'up';

    switch (this._curPos) {
      case this._upPos:
        fireX += 1;
        direction = 'up';
        break;
      case this._downPos:
        fireY += 2;
        fireX += 1;
        direction = 'down';
        break;
      case this._leftPos:
        fireY++;
        direction = 'left';
        break;
      case this._rightPos:
        fireY++;
        fireX += 2;
        direction = 'right';
        break;
    }
    this._projectiles.push(new Projectile(fireY, fireX, direction));
  }

  updateProjectiles(gameField: GameField) {
    this._projectiles = this._projectiles.filter((proj) =>
      proj.insideBorder(this._rightBorder, this._lowerBorder),
    );

    for (const proj of this._projectiles) {
      proj.moveProjectile();
      proj.putProjectile(gameField);
    }
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get curPos() {
    return this._curPos;
  }

  get projectilesCount() {
    return this._projectiles.length;
  }
}
