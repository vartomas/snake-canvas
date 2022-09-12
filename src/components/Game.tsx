import { useRef } from 'react';
import styled from 'styled-components';
import { useGame } from '../hooks/useGame';

const Game = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const { settings } = useGame(canvasRef);

  return <Canvas ref={canvasRef} width={settings.gridSize * settings.tileSize} height={settings.gridSize * settings.tileSize} />;
};

const Canvas = styled.canvas`
  border: 10px solid #a8dadc;
  background-color: #f1faee;
`;

export default Game;
