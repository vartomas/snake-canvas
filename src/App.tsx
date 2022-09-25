import styled, { ThemeProvider } from 'styled-components';
import Game from './components/Game';

import { createGlobalStyle } from 'styled-components';
import theme from './model/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }
`;

const App = () => (
  <Wrap>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  </Wrap>
);

const Wrap = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default App;
