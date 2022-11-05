import React from 'react';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoCreate from './components/TodoCreate';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  `;

function TodoListPage() {
  return (
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
  );
}

export default TodoListPage;
