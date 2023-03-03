import { Task } from '../Interfaces';

interface Props {
    task: Task;
    deleteTask(id: number): void;
    completeTask(id: number): void;
}
//  deleteTask(id: number): void;


export const TodoTask = ({ task, deleteTask,completeTask }: Props) => {
    return (
        <div className="flex justify-between items-end my-5">
            <div>
                <span className={task.complete? "text-yellow-50" : ""}>{task.taskName} </span>
            </div>
            <div className="flex gap-5 items-end">
                <div>
                    <span className={task.complete? "text-yellow-50" : ""}> {task.deadline > 1 ? task.deadline + ' days' : task.deadline + ' day'}</span>
                    
                </div>
                <div>
                    <button className={`btn btn-sm btn-outline btn-warning ${task.complete? "hidden" : ""}`} onClick={() => completeTask(task.id)}>done</button>
                    <button className={`btn btn-sm btn-outline btn-warning ${task.complete? "" : "hidden"}`} onClick={() => completeTask(task.id)}>Not yet</button>
                    <button className="btn btn-sm btn-outline btn-warning" onClick={() => deleteTask(task.id)}>X</button>
                </div>
            </div>

        </div>
    )
}


