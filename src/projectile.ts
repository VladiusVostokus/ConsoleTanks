import { GameField } from "./gamefield";

export type DirectionsType = 'up' | 'down' | 'left' | 'right';

export class Projectile {
    private _symbol: string = 'o';
    private _x: number;
    private _y: number;
    private readonly _direction: DirectionsType;

    constructor( y: number, x: number, direction: DirectionsType) {
        this._y = y;
        this._x = x;
        this._direction = direction;
    }

    moveProjectile() {
      const directions: { [key: string]: () => number } = {
        up: () => this._y--,
        down: () => this._y++,
        left: () => this._x--,
        right: () => this._x++,
      }

        directions[this._direction]()
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
