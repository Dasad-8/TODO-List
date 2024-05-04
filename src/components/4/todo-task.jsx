import './todo-task.css';

function TodoTask (props) {

    let task =  props.task;

    return <>
        <section className='task'>
            <label className='check'>
                <input className='check-input' type="checkbox"/>
                <span className='check-box'></span>

                <div className='task-data'>
                    <h3>{task.title}</h3>
                    <div className='flex'>
                        <p>{(!task.modified) ? "created" : "modified"} {task.date}, {task.time}</p>
                    </div>
                </div>
            </label>
            <div className='task-btns'>
                <button className='task-btn'><img src="./img/trash-container.png" alt="error" /></button>
                <button className='task-btn'><img src="./img/pencil.png" alt="error" /></button>
            </div>
        </section>
    </>
}

export default TodoTask;
