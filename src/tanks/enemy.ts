import { ITank } from './ITank';

export class Enemy extends ITank {
  constructor(coordinates: { x: number; y: number }) {
    const health = Math.floor(Math.random() * 3) + 1;
    const speed = Math.floor(Math.random() * 3) + 1;
    const symbol = '*';
    super(coordinates, health, speed, symbol);
  }

  act(gameField: unknown) {}
}
