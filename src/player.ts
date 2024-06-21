import { Tank } from "./tank";

export class Player extends Tank {

    constructor(y: number, x: number, rightWall: number, lowerWall: number) {
        super(y, x, rightWall, lowerWall);
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
          this.fire();
        },
    
        q: () => {
          console.log("game over");
          process.exit(0);
        },
    };

    action(button:string) {
        (this._controls[button] || (() => {}))();
    }
}