import styled from 'styled-components';
import { motion } from 'framer-motion';
import InfoSection from './InfoSection';

const PopupMotion = {
  rest: {
    scale: 0,
  },
  hover: {
    scale: 1,
  },
};

const Info = () => (
  <Container initial="rest" whileHover="hover" animate="rest">
    <span>i</span>
    <Popup variants={PopupMotion} transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.5 }}>
      <InfoSection src="strawberry.svg" points={5} />
      <Divider />
      <InfoSection src="banana.svg" points={3} />
      <Divider />
      <InfoSection src="apple.svg" points={1} />
    </Popup>
  </Container>
);

const Container = styled(motion.span)`
  position: absolute;
  top: 18px;
  left: 18px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primaryDark};
  font-weight: 700;
  cursor: default;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popup = styled(motion.div)`
  position: absolute;
  top: 32px;
  left: 32px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primaryDark};
  padding: 8px;
  border: 3px solid ${({ theme }) => theme.color.primaryLight};
  border-radius: 8px;
  width: 135px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const Divider = styled.div`
  height: 4px;
`;

export default Info;
