import styled from 'styled-components';

const Info = () => (
  <Container>
    i<Popup>aaa</Popup>
  </Container>
);

const Container = styled.span`
  position: absolute;
  top: 18px;
  right: 18px;
  color: ${({ theme }) => theme.color.white};
  cursor: default;
  border: 1px solid white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popup = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primaryDark};
`;

export default Info;
