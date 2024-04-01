import './todo-task.css';

function TodoTask (props) {

    let task =  props.task;

    return <>
        <section>
            <input className='heckbox' type="checkbox" />
            <div>
                <h3>{task.title}</h3>
                <div>
                    <p>{task.time}</p>
                    <p>{task.date}</p>
                    <p>{(!task.modified) 
                    ? "created" : "modified"}</p>
                </div>
                <div>
                    <button><img src="" alt="error" /></button>
                    <button><img src="" alt="error" /></button>
                </div>
            </div>
        </section>
    </>
}

export default TodoTask;