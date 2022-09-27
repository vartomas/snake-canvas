import styled from 'styled-components';
import Game from './components/Game';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './hooks/useTheme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }
  body {
    overflow: hidden;
  }
`;

const App = () => (
  <ThemeProvider>
    <Wrap>
      <GlobalStyle />
      <Game />
    </Wrap>
  </ThemeProvider>
);

const Wrap = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ theme }) => theme.bgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default App;
