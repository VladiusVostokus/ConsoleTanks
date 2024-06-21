import { Tank } from './tank';
import { GameField } from './gamefield';
import { DirectionsType } from './projectile';

export class Enemy extends Tank {
  private _directions: DirectionsType[] = ['up', 'down', 'left', 'right'];

  protected _upPos: string[][] = [
    [' ', 'M', ' '],
    ['@', 'M', '@'],
    ['@', 'M', '@'],
  ];
  protected _downPos: string[][] = [
    ['@', 'M', '@'],
    ['@', 'M', '@'],
    [' ', 'M', ' '],
  ];
  protected _leftPos: string[][] = [
    [' ', '@', '@'],
    ['<', '<', '<'],
    [' ', '@', '@'],
  ];
  protected _rightPos: string[][] = [
    ['@', '@', ' '],
    ['>', '>', '>'],
    ['@', '@', ' '],
  ];

  constructor(y: number, x: number, rightWall: number, lowerWall: number) {
    super(y, x, rightWall, lowerWall);
    this._curPos = this._upPos;
  }

  moveRandomly() {
    const randomIndex = Math.floor(Math.random() * this._directions.length);
    const randomDirection = this._directions[randomIndex];

    const goOnDirection = {
      up: () => this.turnUp(),
      down: () => this.turnDown(),
      left: () => this.turnLeft(),
      right: () => this.turnRight(),
    }

    goOnDirection[randomDirection]();
  }

  fireRandomly() {
    if (Math.random() > 0.5) {
      this.fire();
    }
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
}
