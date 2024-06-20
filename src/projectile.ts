import { GameField } from "./gamefield";

export class Projectile {
    private _projectile: string = 'o';
    private _x: number;
    private _y: number;
    private _direction: string;

    constructor(x: number, y: number, direction: string) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    moveProjectile() {
        switch (this._direction) {
            case 'up':
                this._y--;
                break;
            case 'down':
                this._y++;
                break;
            case 'left':
                this._x--;
                break;
            case 'right':
                this._x++;
                break;
        }
    }

    insideBorder(rightBorder: number, lowerBorder:number): boolean {
        return this._x !== 1 && 
               this._x + 1 !== rightBorder &&
               this._y !== 1 &&
               this._y + 1 !== lowerBorder;
    }

    putProjectile(gamefield: GameField) {
        gamefield.setCell(this._y, this._x, this._projectile);
    }
}