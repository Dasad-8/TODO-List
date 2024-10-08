import React, { useState } from 'react';
import './todo-list.css';
import TodoTask from './todo-task';
import AddTask from '../5/add-task';
import useLocalStorage from '../7/useLocalStorage';

function TodoList ({filter, search, setSearch}) {

    const [tasks, setTasks] = useLocalStorage("tasks", "./todo-list-default.json");

    let [editIndex, setEditIndex] = useState(-1);

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

    function fromStringToDate(time, data) {
        let timeSplit = time.split(':');
        let hours = parseInt(timeSplit[0]);
        let mins = parseInt(timeSplit[1]);
    
        let dataSplit = data.split('.');
        let d = parseInt(dataSplit[0]);
        let m = parseInt(dataSplit[1]);
        let y = parseInt(dataSplit[2]);
    
        let date = new Date();
        date.setDate(d);
        date.setMonth(m - 1);
        date.setFullYear(y);
    
        date.setHours(hours);
        date.setMinutes(mins);
    return date;
    }

    let filteredTasks = (filter === "all") ? tasks :
    (filter === "last_day") ? tasks.filter( (task)=> new Date() - fromStringToDate(task.time, task.date) <= 86400000) :
    (filter === "last_week") ? tasks.filter( (task)=> new Date() - fromStringToDate(task.time, task.date) <= 604800000) :
    (filter === "last_month") ? tasks.filter( (task)=> new Date() - fromStringToDate(task.time, task.date) <= 2592000000) :
    (filter === "last_year") ? tasks.filter( (task)=> new Date() - fromStringToDate(task.time, task.date) <= 31104000000) : tasks

    filteredTasks = (tasks === null) ? [] : filteredTasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));    


    return <>
        <div className='todo-list'>
            {(tasks === null) ? <></> : tasks.map ((task, index) => (
            (filteredTasks.includes(task)) ?<TodoTask task = {task} key = {index} setTasks = {setTasks} tasks = {tasks} index = {index} editIndex = {editIndex} setEditIndex = {setEditIndex} /> : <div key={index}></div>))}
        </div>
        <AddTask  addTask={addTask}/>

    </>
}

export default TodoList;