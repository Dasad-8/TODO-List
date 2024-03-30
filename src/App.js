
import './App.css';
import React from 'react';
import Search from './components/1/search';
import Filter from './components/2/filter';
import TodoList from './components/3/todo-list';
import AddTask from './components/4/add-task';

function App() {



  return (
    <section className="wr">
      <h1>Todo List</h1>

      <Search />
      <Filter />
      <TodoList />
      <AddTask />
    </section>
  );
}

export default App;
