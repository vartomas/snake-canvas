import { useRef } from 'react';
import styled from 'styled-components';
import { useGame } from '../hooks/useGame';

const Game = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const { settings } = useGame(canvasRef);

  return <Canvas ref={canvasRef} width={settings.gridSize * settings.tileSize} height={settings.gridSize * settings.tileSize} />;
};

const Canvas = styled.canvas`
  border: 1px solid black;
`;

export default Game;
