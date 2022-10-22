import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoItem from './components/TodoItem';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  `;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>

    </div>
  );
}

export default App;
