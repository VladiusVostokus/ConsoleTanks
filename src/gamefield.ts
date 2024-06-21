export class GameField {
  private _space: string = ' ';
  private _wall: string = '|';
  private readonly _width: number;
  private readonly _height: number;
  private readonly _row: string[];
  private _gameField: string[][] = [];

  constructor(widht: number, height: number) {
    this._width = widht;
    this._height = height;
    this._row = new Array(this._width).fill(this._space);
  }

  updateGameField() {
    this._gameField = [];
    for (let i = 0; i < this._height; i++) {
      this._gameField.push([...this._row]);
      const row: string[] = this._gameField[i];
      row[0] = this.wall;
      row[this._width - 1] = this._wall;
    }
    for (let j = 0; j < this._width; j++) this._gameField[0][j] = this._wall;
    for (let j = 0; j < this._width; j++)
      this._gameField[this._width - 1][j] = this._wall;
  }

  showGameField() {
    const rows = this._gameField.map((row) => row.join(''));
    const field = rows.join('\n');
    console.log(field);
  }

  getCell(row: number, col: number) {
    return this._gameField[row][col];
  }

  setCell(row: number, col: number, value: string) {
    this._gameField[row][col] = value;
  }

  getWidth() {
    return this._gameField[0].length;
  }

  getHeight() {
    return this._gameField.length;
  }

  get wall() {
    return this._wall;
  }

  get space() {
    return this._space;
  }
}
