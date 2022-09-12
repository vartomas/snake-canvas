import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  gameOver: boolean;
}

const GameOverModal: React.FC<Props> = ({ gameOver }) => {
  return (
    <>
      {gameOver && (
        <Container
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 10, mass: 1 }}
        >
          <Header>Game over</Header>
          <ScoreLine>Score: 0</ScoreLine>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 600px;
  height: 600px;
  background-color: #1d3557;
  position: absolute;
  border-radius: 24px;
  border: 3px solid #a8dadc;
`;

const Header = styled.h2`
  color: #f1faee;
  font-size: 36px;
  text-align: center;
  margin-top: 12px;
`;

const ScoreLine = styled.h3`
  color: #f1faee;
  font-size: 24px;
  text-align: center;
  margin-top: 12px;
`;

export default GameOverModal;
