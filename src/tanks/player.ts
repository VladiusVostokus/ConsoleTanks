import { ITank } from "./ITank";

export class Player extends ITank {
  constructor(coordinates: { x: number, y: number }) {
    const health = 3;
    const speed = 3;
    const symbol = '#';
    super(coordinates, health, speed, symbol);
  }
}
