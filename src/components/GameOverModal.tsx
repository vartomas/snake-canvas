import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Fruit } from '../model/game';
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
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5 }}
        >
          <Header>Game over</Header>
          <Score
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5, delay: 0.5 }}
          >
            {score}
          </Score>
          <ValuesContainer
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5, delay: 1 }}
          >
            <FruitCount url="strawberry.svg" value={fruitsEaten.filter((x) => x === 'strawberry').length} />
            <FruitCount url="banana.svg" value={fruitsEaten.filter((x) => x === 'banana').length} />
            <FruitCount url="apple.svg" value={fruitsEaten.filter((x) => x === 'apple').length} />
          </ValuesContainer>
          <Button
            animate={{
              rotate: [0, 2, 0, -2, 0, 0, 0, 0, 0, 0],
              scale: [1, 1.05, 1, 1.05, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ repeat: Infinity }}
            onClick={resetGame}
          >
            Restart (Spacebar)
          </Button>
          <Info>i</Info>
        </Container>
      )}
    </>
  );
};

const Container = styled(motion.div)`
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

const Score = styled(motion.div)`
  color: #f1faee;
  font-size: 156px;
`;

const ValuesContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled(motion.button)`
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

const Info = styled.span`
  position: absolute;
  top: 18px;
  right: 18px;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GameOverModal;
