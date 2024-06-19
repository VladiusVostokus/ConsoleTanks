import { GameField } from "./gamefield";

export class Tank{
    private _x: number;
    private _y: number;
    private _upPos: string[][] = [[' ','#',' '],
                                  ['@','#','@'],
                                  ['@','#','@'],
                                ];

    constructor(x: number, y:number) {
        this._x = x;
        this._y = y;
    }

    putTank(gamefield: GameField) {
        for (let i:number = 0; i < 3; i++){
            for (let j:number = 0; j < 3; j++) {
                gamefield.setCell(this._y+i,this._x+j,this._upPos[i][j]);
            }
        }
    }
}