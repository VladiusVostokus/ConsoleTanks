import { GameField } from './gamefield';
import { Tank } from './tank';
import readline from 'readline';
import process from 'process';

const HEIGHT: number = 20;
const WIDTH: number = 20;
const TIMEOUT: number = 60;

const gameField = new GameField(WIDTH, HEIGHT);
const tank = new Tank(9,9);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}


const updateGame = () => {
    console.clear();
    gameField.updateGameField();
    tank.putTank(gameField);
    gameField.showGameField();
};

const controls: { [key: string]: () => void } = {
    w: () => {
      tank.turnUp();
    },

    a: () => {
      tank.turnLeft();
    },

    s: () => {
      tank.turnDown();
    },

    d: () => {
      tank.turnRight();
    },

    q: () => {
      console.log("game over");
      process.exit(0);
    },
  };
  
const action = (button: string): void => (controls[button] || (() => {}))();
  
process.stdin.on("keypress", (button: string) => {
    action(button);
});
  
setInterval(updateGame, TIMEOUT);


