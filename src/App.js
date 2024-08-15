
import './App.css';
import React, { useState } from 'react';
import TodoList from './components/4/todo-list';
import SearchFilterNav from './components/3/search-filter-nav';


function App() {

  const [filter, setFilter] = useState('all');

  const [search, setSearch] = useState("")

  return <>
    <section className="wr">
      <h1>Todo List</h1>

      <SearchFilterNav filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
      <TodoList  filter={filter} search={search} setSearch={setSearch}/>
    </section>
  </>;
}

export default App;
