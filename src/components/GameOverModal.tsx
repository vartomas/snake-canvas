import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Fruit } from '../hooks/useGame';
import FruitCount from './FruitCount';

interface Props {
  score: number;
  fruitsEaten: Fruit[];
  gameOver: boolean;
  resetGame: () => void;
}

const GameOverModal: React.FC<Props> = ({ score, fruitsEaten, gameOver, resetGame }) => {
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
          <NumberLine>{score}</NumberLine>
          <ValuesContainer>
            <FruitCount url="strawberry.svg" value={fruitsEaten.filter((x) => x === 'strawberry').length} />
            <FruitCount url="banana.svg" value={fruitsEaten.filter((x) => x === 'banana').length} />
            <FruitCount url="apple.svg" value={fruitsEaten.filter((x) => x === 'apple').length} />
          </ValuesContainer>
          <Button as={motion.button} whileHover={{ scale: 1.1 }} onClick={resetGame}>
            Restart (Spacebar)
          </Button>
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
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.h2`
  color: #f1faee;
  font-size: 36px;
  margin-top: 12px;
`;

const NumberLine = styled.h3`
  color: #f1faee;
  font-size: 156px;
`;

const ValuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-bottom: 24px;
  padding: 24px;
  font-size: 24px;
  color: #1d3557;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export default GameOverModal;
