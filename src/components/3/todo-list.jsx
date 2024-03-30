import React from 'react';
import './todo-list.css';
import TodoTask from './todo-task';
import {useState, useEffect} from  'react';
import TodoTaskLoader from './todo-task-loader';

function TodoList (props) {

    const [tasks, setTasks] = useState([])

    useEffect(() =>{
        fetchTasks();
    }, []);

    function fetchTasks (){
        fetch ('./todo-list.json')
        .then(response => response.json())
        .then(tasks => {console.log('Received tasks:', tasks);
        setTasks(tasks)});
    }


    return <>
        <div>
            {(tasks.length === 0) ? <><TodoTaskLoader /><TodoTaskLoader /><TodoTaskLoader /></> : tasks.map ((item, index) => (<TodoTask task = {item} key = {index} />))}
        </div>
    </>
}

export default TodoList;