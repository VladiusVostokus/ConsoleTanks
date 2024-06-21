import { Tank } from './tank';

export class Player extends Tank {
  private _lastShootTime: number = 0;
  private _shootInterval: number;

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
}
