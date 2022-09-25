import styled from 'styled-components';

interface Props {
  src: string;
  points: number;
}

const InfoSection: React.FC<Props> = ({ src, points }) => (
  <Section>
    <Image src={src} />
    <Points>- {points} points</Points>
  </Section>
);

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 30px;
`;

const Points = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryDark};
  margin-left: 8px;
`;

export default InfoSection;
