import { useEffect, useState, useRef } from 'react';

interface Settings {
  gridSize: number;
  tileSize: number;
  speed: number;
  snakeColor: string;
}

type Direction = 'up' | 'down' | 'left' | 'right';

type Positions = [number, number][];

const settings: Settings = {
  gridSize: 40,
  tileSize: 10,
  speed: 20,
  snakeColor: '#457b9d',
};

export const useGame = (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) => {
  const [gameOver, setGameOver] = useState(false);
  const snakeRef = useRef<{ score: number; direction: Direction; snakeLength: number }>({
    score: 0,
    direction: 'right',
    snakeLength: 5,
  });

  const strawberry = new Image();
  strawberry.src = 'strawberry.svg';

  const getStartingPosition = (): Positions => [[(settings.gridSize * settings.tileSize) / 2, (settings.gridSize * settings.tileSize) / 2]];

  const generateRandomPointPosition = (): [number, number] => {
    const randomPos: [number, number] = [
      Math.floor(Math.random() * settings.gridSize) * settings.tileSize,
      Math.floor(Math.random() * settings.gridSize) * settings.tileSize,
    ];

    if (positions.find((x) => x[0] === randomPos[0] && x[1] === randomPos[1])) {
      return generateRandomPointPosition();
    }

    return randomPos;
  };

  let positions: Positions = getStartingPosition();
  let pointPosition = generateRandomPointPosition();

  const getNewHeadPosition = (): [number, number] => {
    const { gridSize, tileSize } = settings;

    if (snakeRef.current.direction === 'right') {
      const position: [number, number] = [positions[0][0] + settings.tileSize, positions[0][1]];
      return position[0] > (gridSize - 1) * tileSize ? [0, position[1]] : position;
    }

    if (snakeRef.current.direction === 'left') {
      const position: [number, number] = [positions[0][0] - settings.tileSize, positions[0][1]];
      return position[0] < 0 ? [(gridSize - 1) * tileSize, position[1]] : position;
    }

    if (snakeRef.current.direction === 'up') {
      const position: [number, number] = [positions[0][0], positions[0][1] - settings.tileSize];
      return position[1] < 0 ? [position[0], (gridSize - 1) * tileSize] : position;
    }

    if (snakeRef.current.direction === 'down') {
      const position: [number, number] = [positions[0][0], positions[0][1] + settings.tileSize];
      return position[1] > (gridSize - 1) * tileSize ? [position[0], 0] : position;
    }

    return [0, 0];
  };

  const eatPoint = () => {
    snakeRef.current.snakeLength += 3;
    pointPosition = generateRandomPointPosition();
    snakeRef.current.score += 3;
  };

  const resetGame = () => {
    snakeRef.current.snakeLength = 5;
    positions = getStartingPosition();
    pointPosition = generateRandomPointPosition();
    snakeRef.current.score = 0;
    setGameOver(false);
  };

  const checkCrash = (newPos: [number, number]) => {
    if (positions.find((x) => x[0] === newPos[0] && x[1] === newPos[1])) {
      return true;
    }

    return false;
  };

  const moveSnake = () => {
    const cutEnd = (arr: [number, number][]) =>
      snakeRef.current.snakeLength >= positions.length ? arr : arr.slice(0, snakeRef.current.snakeLength - positions.length);
    const newPos = getNewHeadPosition();

    if (newPos[0] === pointPosition[0] && newPos[1] === pointPosition[1]) {
      eatPoint();
    }

    if (checkCrash(newPos)) {
      setGameOver(true);
      return;
    }

    positions = [newPos, ...cutEnd(positions)];
  };

  const draw = (ctx: CanvasRenderingContext2D, image: HTMLImageElement) => {
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    ctx.drawImage(image, pointPosition[0], pointPosition[1], settings.tileSize, settings.tileSize);
    ctx.fillStyle = settings.snakeColor;
    positions.forEach((x) => {
      ctx.fillRect(x[0], x[1], settings.tileSize, settings.tileSize);
    });
  };

  useEffect(() => {
    const context = canvasRef?.current?.getContext('2d');
    if (gameOver || !context) return;
    const interval = setInterval(() => {
      moveSnake();
      draw(context, strawberry);
    }, 1000 / settings.speed);

    return () => clearInterval(interval);
  }, [draw, gameOver]);

  useEffect(() => {
    const keyPressEvent = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && snakeRef.current.direction !== 'right') {
        snakeRef.current.direction = 'left';
      }

      if (e.key === 'ArrowRight' && snakeRef.current.direction !== 'left') {
        snakeRef.current.direction = 'right';
      }

      if (e.key === 'ArrowUp' && snakeRef.current.direction !== 'down') {
        snakeRef.current.direction = 'up';
      }

      if (e.key === 'ArrowDown' && snakeRef.current.direction !== 'up') {
        snakeRef.current.direction = 'down';
      }

      if (e.key === ' ' && gameOver) {
        resetGame();
      }
    };

    document.addEventListener('keydown', keyPressEvent);

    return () => document.removeEventListener('keydown', keyPressEvent);
  }, [gameOver]);

  return { score: snakeRef.current.score, gameOver, settings, resetGame };
};
