
import './App.css';
import React, { useState } from 'react';
import TodoList from './components/4/todo-list';
import SearchFilterNav from './components/3/search-filter-nav';


/* import useTestHook from './components/6/useTestHook';
import useRandom from './components/8/useRandom'; */

function App() {

  const [filter, setFilter] = useState('all');

  const [search, setSearch] = useState("")

/*   const { value, increment, decrement} = useTestHook(0);


  const {randomNumber, generateRandomNumber} = useRandom(0); */

  return <>
    <section className="wr">
      <h1>Todo List</h1>
      <h2>Created by: Alisa Alyounes</h2>

      <SearchFilterNav filter={filter} setFilter={setFilter} search={search} setSearch={setSearch}/>
      <TodoList  filter={filter} search={search} setSearch={setSearch}/>
    </section>

    {/* <div>
      <p>Value: {value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>


    <div>
            <p>{randomNumber}</p>
            <button onClick={generateRandomNumber}>Set X to Random Value</button>
    </div> */}
  </>;
}

export default App;
