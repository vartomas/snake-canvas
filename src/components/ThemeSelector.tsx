import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { defaultTheme, amiTheme, sofiTheme } from '../utils/theme';

const ThemeSelector = () => {
  const { currentTheme, changeTheme } = useTheme();

  if (!changeTheme) return null;

  return (
    <Container>
      <Header>Select theme</Header>
      <ButtonGroup>
        <Button current={currentTheme.name === 'Default'} onClick={() => changeTheme(defaultTheme)}>
          Default
        </Button>
        <Button current={currentTheme.name === 'Ami'} onClick={() => changeTheme(amiTheme)}>
          Ami
        </Button>
        <Button current={currentTheme.name === 'Sofi'} onClick={() => changeTheme(sofiTheme)}>
          Sofi
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ThemeSelector;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Header = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 8px;
`;

const Button = styled.div<{ current: boolean }>`
  padding: 8px;
  margin: 0 8px;
  flex: 1;
  background-color: ${({ theme, current }) => (current ? theme.color.primaryLight : theme.color.primary)};
  color: ${({ theme }) => theme.color.white};
  cursor: ${({ current }) => (current ? 'default' : 'pointer')};
`;
