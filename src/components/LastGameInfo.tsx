import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Fruit } from '../model/game';
import FruitCount from './FruitCount';

interface Props {
  score: number;
  fruitsEaten: Fruit[];
  settingsOpen: boolean;
  resetGame: () => void;
}

const LastGameInfo: React.FC<Props> = ({ score, fruitsEaten, settingsOpen, resetGame }) => {
  const variants = {
    open: { y: '-100%' },
    closed: { y: 0 },
  };

  return (
    <Container animate={settingsOpen ? 'open' : 'closed'} variants={variants}>
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
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 36px;
  margin-top: 12px;
`;

const Score = styled(motion.div)`
  color: ${({ theme }) => theme.color.white};
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
  color: ${({ theme }) => theme.color.primaryDark};
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export default LastGameInfo;
