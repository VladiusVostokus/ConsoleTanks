export type Directions = 'w' | 's' | 'a' | 'd';

export class ITank {
  x: number;
  y: number;
  symbol: string;
  speed: number;
  health: number;

  constructor(
    coordinates: { x: number; y: number },
    health: number,
    speed: number,
    symbol: string,
  ) {
    this.x = coordinates.x;
    this.y = coordinates.y;
    this.health = health;
    this.speed = speed;
    this.symbol = symbol;
  }

  move(direction: Directions, gameField: unknown) {}

  shoot(gameField: unknown) {}
}
