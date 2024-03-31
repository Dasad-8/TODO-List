
import './App.css';
import React from 'react';
import TodoList from './components/4/todo-list';
import AddTask from './components/5/add-task';
import SearchFilterNav from './components/3/search-filter-nav';

function App() {



  return (
    <section className="wr">
      <h1>Todo List</h1>

      <SearchFilterNav />
      <TodoList />
      <AddTask />
    </section>
  );
}

export default App;
