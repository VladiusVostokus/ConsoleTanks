import { Tank } from './tank';
import { Enemy } from './enemy';

export class Player extends Tank {
  private _lastShootTime: number = 0;
  private readonly _shootInterval: number;

  constructor(
    y: number,
    x: number,
    rightWall: number,
    lowerWall: number,
    shootInterval: number,
  ) {
    super(y, x, rightWall, lowerWall);
    this._shootInterval = shootInterval;
  }

  private _controls: { [key: string]: () => void } = {
    w: () => {
      this.turnUp();
    },
    a: () => {
      this.turnLeft();
    },
    s: () => {
      this.turnDown();
    },
    d: () => {
      this.turnRight();
    },
    f: () => {
      const currentTime = Date.now();
      if (currentTime - this._lastShootTime >= this._shootInterval) {
        this.fire();
        this._lastShootTime = currentTime;
      }
    },
    q: () => {
      console.log('game over');
      process.exit(0);
    },
  };

  action(button: string) {
    (this._controls[button] || (() => {}))();
  }

  checkCollisionWithEnemies(enemies: Enemy[]): boolean {
    for (const enemy of enemies) {
      if (this.y <= enemy.y + 2 && this.y + 2 >= enemy.y &&
        this.x <= enemy.x + 2 && this.x + 2 >= enemy.x) {
        return true;
      }
    }
    return false;
  }
}
