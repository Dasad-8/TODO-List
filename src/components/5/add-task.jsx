import React from "react";
import './add-task.css';

function AddTask (props) {

    function OnSubmit (e) {
        e.preventDefault();
        const taskInput = document.getElementById('task-input');
        const addTaskValue = taskInput.value;
        if(addTaskValue.length === 0) {
            props.addTask('New Task', 'This is a new task', 'red', false);
            alert('Пустое поле задачи! Пожалуйста, введите текст задачи');
            return;
        }  
    };

    return <>
        <section>
            <form onSubmit={OnSubmit} className="task-form" action="">
                <input id="task-input" className="add-task" type="text" placeholder="New task..." /><br/>
                <button className="add-task-btn">Add Task</button>
            </form>
        </section>
    </>
}

export default AddTask; 