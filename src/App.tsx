import styled from 'styled-components';
import Game from './components/Game';

import { createGlobalStyle } from 'styled-components';

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
    <Game />
  </Wrap>
);

const Wrap = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f3e46;
  background-image: url('bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default App;
