import { useEffect, useState } from 'react';

interface Settings {
  gridSize: number;
  tileSize: number;
  speed: number;
  direction: 'up' | 'down' | 'left' | 'right';
  snakeColor: string;
}

type Positions = [number, number][];

const initialSettings: Settings = {
  gridSize: 40,
  tileSize: 10,
  speed: 10,
  direction: 'right',
  snakeColor: '#457b9d',
};

export const useGame = (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) => {
  const [gameOver, setGameOver] = useState(false);

  let settings: Settings = { ...initialSettings };
  let snakeLength = 5;

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
    switch (settings.direction) {
      case 'right':
        return [positions[0][0] + settings.tileSize, positions[0][1]];
      case 'left':
        return [positions[0][0] - settings.tileSize, positions[0][1]];
      case 'up':
        return [positions[0][0], positions[0][1] - settings.tileSize];
      case 'down':
        return [positions[0][0], positions[0][1] + settings.tileSize];
      default:
        return [0, 0];
    }
  };

  const eatPoint = () => {
    ++snakeLength;
    pointPosition = generateRandomPointPosition();
  };

  const resetGame = () => {
    settings = { ...initialSettings };
    snakeLength = 5;
    positions = getStartingPosition();
    pointPosition = generateRandomPointPosition();
  };

  const checkCrash = (newPos: [number, number]) => {
    const { gridSize, tileSize } = settings;
    if (newPos[0] > gridSize * tileSize || newPos[0] < 0 || newPos[1] > gridSize * tileSize || newPos[1] < 0) {
      return true;
    }

    if (positions.find((x) => x[0] === newPos[0] && x[1] === newPos[1])) {
      return true;
    }

    return false;
  };

  const moveSnake = () => {
    const cutEnd = (arr: [number, number][]) => (snakeLength >= positions.length ? arr : arr.slice(0, snakeLength - positions.length));
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
    if (gameOver) return;
    const canvas = canvasRef?.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const image = new Image();
    image.src = 'strawberry.svg';

    const interval = setInterval(() => {
      moveSnake();
      draw(context, image);
    }, 1000 / settings.speed);

    return () => clearInterval(interval);
  }, [draw, gameOver]);

  useEffect(() => {
    const keyPressEvent = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && settings.direction !== 'right') {
        settings.direction = 'left';
      }

      if (e.key === 'ArrowRight' && settings.direction !== 'left') {
        settings.direction = 'right';
      }

      if (e.key === 'ArrowUp' && settings.direction !== 'down') {
        settings.direction = 'up';
      }

      if (e.key === 'ArrowDown' && settings.direction !== 'up') {
        settings.direction = 'down';
      }

      if (e.key === ' ' && gameOver) {
        resetGame();
        setGameOver(false);
      }
    };

    document.addEventListener('keydown', keyPressEvent);

    return () => document.removeEventListener('keydown', keyPressEvent);
  }, [gameOver]);

  return { gameOver, settings };
};
