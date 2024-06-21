import { Tank } from './tank';
import { GameField } from './gamefield';

export class Enemy extends Tank {
  private _directions: ('up' | 'down' | 'left' | 'right')[] = ['up', 'down', 'left', 'right'];

  constructor(y: number, x: number, rightWall: number, lowerWall: number) {
    super(y, x, rightWall, lowerWall);
  }

  moveRandomly() {
    const randomIndex = Math.floor(Math.random() * this._directions.length);
    const randomDirection = this._directions[randomIndex];

    switch (randomDirection) {
      case 'up':
        if (this._y > 1) this.turnUp();
        break;
      case 'down':
        if (this._y + 3 < this._lowerBorder) this.turnDown();
        break;
      case 'left':
        if (this._x > 1) this.turnLeft();
        break;
      case 'right':
        if (this._x + 3 < this._rightBorder) this.turnRight();
        break;
    }
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
