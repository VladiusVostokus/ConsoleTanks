export class Projectile {
  x: number;
  y: number;
  symbol: string;
  speed: number;
  direction: number;

  constructor(
    coordinates: { x: number; y: number },
    direction: number,
    speed: number,
    symbol: string,
  ) {
    this.x = coordinates.x;
    this.y = coordinates.y;
    this.direction = direction;
    this.speed = speed;
    this.symbol = symbol;
  }

  move() {}
}
