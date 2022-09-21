export interface Settings {
  gridSize: number;
  tileSize: number;
  speed: number;
  tailColor: string;
}

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Positions = [number, number][];

export type Fruit = 'strawberry' | 'banana' | 'apple';

export interface SnakeRef {
  score: number;
  direction: Direction;
  snakeLength: number;
  fruitsEaten: Fruit[];
}
