import { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ReactComponent as Svg } from '../../public/settings.svg';

interface Props {
  onClick: () => void;
}

const SettingsButton: FC<Props> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Image />
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryLight};
  }
`;

const Image = styled(Svg)`
  height: 16px;
  fill: ${({ theme }) => theme.color.primaryDark};
`;

export default SettingsButton;
