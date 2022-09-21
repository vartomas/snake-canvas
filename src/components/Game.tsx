import { useRef } from 'react';
import styled from 'styled-components';
import { useGame } from '../hooks/useGame';
import GameOverModal from './GameOverModal';

const Game = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const { score, fruitsEaten, gameOver, settings, resetGame } = useGame(canvasRef);

  return (
    <>
      <Canvas ref={canvasRef} width={settings.gridSize * settings.tileSize} height={settings.gridSize * settings.tileSize} />
      <GameOverModal score={score} fruitsEaten={fruitsEaten} gameOver={gameOver} resetGame={resetGame} />
    </>
  );
};

const Canvas = styled.canvas`
  border: 3px solid #0376be;
  background-color: #b1d0e6;
`;

export default Game;
