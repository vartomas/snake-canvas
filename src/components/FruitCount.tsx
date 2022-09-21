import styled from 'styled-components';

interface Props {
  url: string;
  value: number;
}

const FruitCount: React.FC<Props> = ({ url, value }) => (
  <Container>
    <Image src={url} />
    <Text>{value}</Text>
  </Container>
);

const Container = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #0376be;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  margin-right: 6px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const Image = styled.img`
  height: 40px;
`;

const Text = styled.p`
  font-size: 24px;
  color: #1d3557;
  margin-left: 8px;
  font-weight: 700;
`;

export default FruitCount;
