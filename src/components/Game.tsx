import { useRef } from 'react';
import styled from 'styled-components';
import { useGame } from '../hooks/useGame';
import GameOverModal from './GameOverModal';

const Game = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const { gameOver, settings } = useGame(canvasRef);

  return (
    <>
      <Canvas ref={canvasRef} width={settings.gridSize * settings.tileSize} height={settings.gridSize * settings.tileSize} />
      <GameOverModal gameOver={gameOver} />
    </>
  );
};

const Canvas = styled.canvas`
  border: 10px solid #a8dadc;
  background-color: #f1faee;
`;

export default Game;
