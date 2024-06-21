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
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const playerCell = this.y + i + ',' + (this.x + j);
          const enemyCell = enemy.y + i + ',' + (enemy.x + j);

          if (playerCell === enemyCell) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
