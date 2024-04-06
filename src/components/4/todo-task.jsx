import './todo-task.css';

function TodoTask (props) {

    let task =  props.task;

    return <>
        <section className='task'>
            <div className='flex'>
                <input className='checkbox' type="checkbox" />
                <div className='task-data'>
                    <h3>{task.title}</h3>
                    <div className='flex'>
                        <p>{task.time},</p>
                        <p>{task.date}</p>
                        <p>{(!task.modified) ? "created" : "modified"}</p>
                    </div>
                </div>
            </div>
            <div className='task-btns'>
                <button className='task-btn'><img src="./img/trash-container.png" alt="error" /></button>
                <button className='task-btn'><img src="./img/pencil.png" alt="error" /></button>
            </div>
        </section>
    </>
}

export default TodoTask;
