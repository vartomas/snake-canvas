import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import useSpeedStore from '../store/useSpeedStore';

const SpeedSelector = () => {
  const speed = useSpeedStore((state) => state.speed);
  const setSpeed = useSpeedStore((state) => state.setSpeed);

  return (
    <Container dragListener={false}>
      <Header>Snake speed: {speed}</Header>
      <RangePicker className="block-drag" type="range" value={speed} min="20" max="50" onChange={(e) => setSpeed(Number(e.target.value))} />
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
`;

const RangePicker = styled.input`
  -webkit-appearance: none;
  width: 250px;
  margin-top: 16px;

  &::-webkit-slider-runnable-track {
    height: 5px;
    background: ${({ theme }) => theme.color.primaryLight};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 20%;
    cursor: ew-resize;
    margin-top: -5px;
    background-color: ${({ theme }) => theme.color.primary};
  }

  &:focus {
    outline: none;
  }
`;

export default SpeedSelector;
