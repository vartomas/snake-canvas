export interface Settings {
  gridSize: number;
  tileSize: number;
  tailColor: string;
}

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Position = [number, number, Direction];

export type Positions = Position[];

export type FruitPosition = [number, number];

export type Fruit = 'strawberry' | 'banana' | 'apple';

export interface SnakeRef {
  score: number;
  direction: Direction;
  snakeLength: number;
  fruitsEaten: Fruit[];
}
