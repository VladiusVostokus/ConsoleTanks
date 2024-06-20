import { GameField } from "./gamefield";

export class Projectile {
    private _symbol: string = 'o';
    private _x: number;
    private _y: number;
    private _direction: string;

    constructor( y: number, x: number, direction: string) {
        this._y = y;
        this._x = x;
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
        gamefield.setCell(this._y, this._x, this._symbol);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get direction() {
        return this._direction;
    }

    get symbol() {
        return this._symbol;
    }
}