import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  `;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;
