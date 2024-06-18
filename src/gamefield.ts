export class GameField {
    symbol: string;
    width: number;
    height: number;
    row: string[];
    gameField!: string[][];

    constructor(symbol: string, widht: number, height: number) {
        this.symbol = symbol;
        this.width = widht;
        this.height = height;
        this.row = new Array(this.width).fill(this.symbol);
    }

    updateGameField() {
        this.gameField = [];
        for (let i = 0; i < this.height; i++) {
          this.gameField.push([...this.row]);
          const row:string[] = this.gameField[i];
          row[0] = '#';
          row[9] = '#';
        }
        for (let j = 0; j < this.width; j++) this.gameField[0][j] =              '#';
        for (let j = 0; j < this.width; j++) this.gameField[this.width - 1][j] = '#';
    }

    showGameField() {
        const rows = this.gameField.map(row => row.join(''));
        const field = rows.join('\n');
        console.log(field); 
    }

    getWidth() {
        return this.gameField[0].length;
    }

    getHeight() {
        return this.gameField.length;
    }
}
