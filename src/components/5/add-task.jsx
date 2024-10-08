import React from "react";
import './add-task.css';
import {useRef} from 'react';

function AddTask (props) {

    function OnSubmit (e) {
        e.preventDefault();
        const taskInput = document.getElementById('task-input');
        const addTaskValue = taskInput.value;
        if(addTaskValue.length === 0) {
            alert('Пустое поле задачи! Пожалуйста, введите текст задачи');
            return;
        };

        const data = new Date();
        const hour = data.getHours();
        const minute = data.getMinutes();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();

        props.addTask(addTaskValue, hour + ":" + minute , day + "." + month + "." + year, false);

        addTaskInputRef.current.value = null;
    };

    const addTaskInputRef = useRef();

    return <>
        <section>
            <form onSubmit={OnSubmit} className="task-form" action="">
                <input ref={addTaskInputRef} id="task-input" className="add-task" type="text" placeholder="New task..." /><br/>
                <button className="add-task-btn">Add Task</button>
            </form>
        </section>
    </>
}

export default AddTask; 