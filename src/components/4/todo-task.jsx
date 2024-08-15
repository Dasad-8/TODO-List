import './todo-task.css';
import {useRef, useEffect, useState} from 'react';

function TodoTask ({task, setTasks, tasks, index, editIndex, setEditIndex}) {

    const deleteTask = () => {
        let  newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const editTask = () => {
        setEditIndex(index);

    };

    const cancelEditTask = () => {
        setEditIndex(-1);
    };

    const applyEditTask = () => {
        let newTasks = [...tasks];
        const newName = inputRef.current.value;
        newTasks[editIndex].title = newName;
        setTasks(newTasks)
        setEditIndex(-1);
        console.log(newTasks)
    };

    const inputRef = useRef();

    
    
    useEffect ( () => {
        if (index === editIndex) {
            inputRef.current.value = task.title;
            inputRef.current.focus();
        };
    }, [editIndex, index, task.title]);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)};

    return <>
        <section className='task'>
            <label className='check'>
                <input className='check-input' type="checkbox"/>
                <span className='check-box'></span>

                <div className='task-data'>
                    {(index === editIndex) ? <input ref={inputRef}  type='text' onChange={handleChange}></input> :<h3>{task.title}</h3>}
                    <div className='flex'>
                        <p>{(!task.modified) ? "created" : "modified"} {task.date}, {task.time}</p>
                    </div>
                </div>
            </label>
            <div className='task-btns'>
                {(index === editIndex) ? <button className='task-btn' onClick={cancelEditTask}><img src="./img/cancel.png" alt="error" /></button> : <button className='task-btn' onClick = {deleteTask} ><img src="./img/trash-container.png" alt="error" /></button>}
                {(index === editIndex) ? <button className='task-btn' onClick={applyEditTask} disabled={inputValue.trim().length === 0}><img src="./img/apply.png" alt="error" /></button> : <button className='task-btn' onClick={editTask}><img src="./img/pencil.png" alt="error" /></button>}
            </div>
        </section>
    </>
}

export default TodoTask
