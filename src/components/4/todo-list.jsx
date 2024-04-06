import React from 'react';
import './todo-list.css';
import TodoTask from './todo-task';
import {useState, useEffect} from  'react';
import TodoTaskLoader from './todo-task-loader';
import AddTask from '../5/add-task';

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

    const addTask = (title, time, date, modified)=>{
        let taskData = {
            title: title,
            time: time,
            date: date,
            modified: modified
        }
        let  newTasks = [...tasks];
        newTasks.push(taskData);
        setTasks(newTasks);
    }


    return <>
        <div className='todo-list'>
            {(tasks.length === 0) ? <><TodoTaskLoader /><TodoTaskLoader /><TodoTaskLoader /></> : tasks.map ((item, index) => (<TodoTask task = {item} key = {index} />))}
        </div>
        <AddTask  addTask={addTask}/>
    </>
}

export default TodoList;