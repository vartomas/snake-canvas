import { useState, useEffect, FC } from 'react';
import { motion, PanInfo, useDragControls } from 'framer-motion';
import styled from 'styled-components';
import { Fruit } from '../model/game';
import Info from './Info';
import LastGameInfo from './LastGameInfo';
import SettingsButton from './SettingsButton';
import Settings from './Settings';

interface Props {
  score: number;
  fruitsEaten: Fruit[];
  gameOver: boolean;
  resetGame: () => void;
}

const GameOverModal: FC<Props> = ({ score, fruitsEaten, gameOver, resetGame }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setSettingsOpen(false);
  }, [gameOver]);

  const toggleSettings = () => setSettingsOpen((prev) => !prev);

  const controls = useDragControls();

  const onDragStart = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if ((e.target as Element).classList.contains('block-drag')) {
      (controls as any).componentControls.forEach((entry: any) => {
        entry.stop(e, info);
      });
    }
  };

  return (
    <>
      {gameOver && (
        <Container
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ scale: 0 }}
          drag
          dragControls={controls}
          dragSnapToOrigin
          onDragStart={onDragStart}
          transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5 }}
        >
          <LastGameInfo score={score} fruitsEaten={fruitsEaten} settingsOpen={settingsOpen} resetGame={resetGame} />
          <Settings settingsOpen={settingsOpen} />
          <Info />
          <SettingsButton onClick={toggleSettings} />
        </Container>
      )}
    </>
  );
};

const Container = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.color.primaryDark};
  position: absolute;
  border-radius: 24px;
  border: 3px solid ${({ theme }) => theme.color.primaryLight};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  overflow: hidden;
`;

export default GameOverModal;
