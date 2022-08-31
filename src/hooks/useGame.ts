import { useEffect } from 'react';

interface Settings {
  gridSize: number;
  tileSize: number;
  speed: number;
  step: number;
  direction: 'up' | 'down' | 'left' | 'right';
}

type Positions = [number, number][];

export const useGame = (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>) => {
  const settings: Settings = {
    gridSize: 40,
    tileSize: 10,
    speed: 5,
    step: 0,
    direction: 'right',
  };

  let snakeLength = 5;

  const getStartingPosition = (): Positions => [[(settings.gridSize * settings.tileSize) / 2, (settings.gridSize * settings.tileSize) / 2]];

  const positions: Positions = getStartingPosition();

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#691a1a';
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    positions.forEach((x) => {
      ctx.fillRect(x[0] + settings.step * settings.tileSize, x[1], settings.tileSize, settings.tileSize);
    });
  };

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const interval = setInterval(() => {
      draw(context);
      settings.step++;
    }, 1000 / settings.speed);

    return () => clearInterval(interval);
  }, [draw]);

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
    };

    document.addEventListener('keydown', keyPressEvent);

    return () => document.removeEventListener('keydown', keyPressEvent);
  }, []);

  return { settings };
};
