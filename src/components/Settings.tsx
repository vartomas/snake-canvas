import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import ThemeSelector from './ThemeSelector';

interface Props {
  settingsOpen: boolean;
}

const Settings: FC<Props> = ({ settingsOpen }) => {
  const variants = {
    open: { y: '-100%' },
    closed: { y: 0 },
  };

  return (
    <Container animate={settingsOpen ? 'open' : 'closed'} variants={variants}>
      <ThemeSelector />
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Settings;
