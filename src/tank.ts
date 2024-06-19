import { GameField } from "./gamefield";

export class Tank{
    private _x: number;
    private _y: number;
    private _upPos: string[][] = [[' ','#',' '],
                                  ['@','#','@'],
                                  ['@','#','@'],
                                ];
    private _downPos: string[][] = [['@','#','@'],
                                    ['@','#','@'],
                                    [' ','#',' '],
                                ];
    private _leftPos: string[][] = [[' ','@','@'],
                                    ['#','#','#'],
                                    [' ','@','@'],
                                ];
    private _rightPos: string[][] = [['@','@',' '],
                                     ['#','#','#'],
                                     ['@','@',' '],
                                ];


    constructor(y: number, x:number) {
        this._y = y;
        this._x = x;
    }

    putTankUp(gamefield: GameField) {
        for (let i:number = 0; i < 3; i++){
            for (let j:number = 0; j < 3; j++) {
                gamefield.setCell(this._y+i,this._x+j,this._upPos[i][j]);
            }
        }
    }

    putTankDown(gamefield: GameField) {
        for (let i:number = 0; i < 3; i++){
            for (let j:number = 0; j < 3; j++) {
                gamefield.setCell(this._y+i,this._x+j,this._downPos[i][j]);
            }
        }
    }

    putTankLeft(gamefield: GameField) {
        for (let i:number = 0; i < 3; i++){
            for (let j:number = 0; j < 3; j++) {
                gamefield.setCell(this._y+i,this._x+j,this._leftPos[i][j]);
            }
        }
    }

    putTankRight(gamefield: GameField) {
        for (let i:number = 0; i < 3; i++){
            for (let j:number = 0; j < 3; j++) {
                gamefield.setCell(this._y+i,this._x+j,this._rightPos[i][j]);
            }
        }
    }
}