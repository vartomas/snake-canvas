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
  margin-left: 3px;
  margin-right: 3px;
`;

const Image = styled.img`
  height: 40px;
`;

const Text = styled.p`
  font-size: 24px;
  color: white;
  margin-left: 8px;
`;

export default FruitCount;
