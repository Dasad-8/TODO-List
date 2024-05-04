import React from 'react';
import './todo-list.css';
import TodoTask from './todo-task';
/* import {useState, useEffect} from  'react'; */
import TodoTaskLoader from './todo-task-loader';
import AddTask from '../5/add-task';
import useLocalStorage from '../7/useLocalStorage';

function TodoList (props) {

    const [tasks, setTasks] = useLocalStorage("tasks", "./todo-list-default.json");




    /* useEffect(() =>{
        if (localStorage.getItem("tasks") === null) {
            fetchTasks();
        } else {
            setTasks(JSON.parse(localStorage.getItem("tasks")));
        }
                
    }, []); */

    /* localStorage.setItem("tasks", JSON.stringify([])); */ 

    /* function fetchTasks (){
        fetch ('./todo-list-default.json')
        .then(response => response.json())
        .then(tasks => {console.log('Received tasks:', tasks);
        setTasks(tasks)});
    } */

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
        /* localStorage.setItem ("tasks", JSON.stringify(newTasks)); */
        
        
    }


    return <>
        <div className='todo-list'>
            {(tasks === null) ? <><TodoTaskLoader /><TodoTaskLoader /><TodoTaskLoader /></> : tasks.map ((item, index) => (<TodoTask task = {item} key = {index} />))}
        </div>
        <AddTask  addTask={addTask}/>
    </>
}

export default TodoList;