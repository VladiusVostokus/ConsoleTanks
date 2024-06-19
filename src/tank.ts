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

    private _curPos: string[][];

    constructor(y: number, x:number) {
        this._y = y;
        this._x = x;
        this._curPos = this._upPos;
    }

    putTank(gamefield: GameField) {
        for (let i:number = 0; i < 3; i++){
            for (let j:number = 0; j < 3; j++) {
                gamefield.setCell(this._y+i, this._x+j, this._curPos[i][j]);
            }
        }
    }

    turnUp() {
        this._curPos = this._upPos;
        this._y--;
    }

    turnDown() {
        this._curPos = this._downPos;
        this._y++;
    }

    turnLeft() {
        this._curPos = this._leftPos;
        this._x--;
    }

    turnRight() {
        this._curPos = this._rightPos;
        this._x++;
    }
}