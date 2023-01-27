import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    deleteTask(id: number): void;
}
//  deleteTask(id: number): void;


export const TodoTask = ({ task, deleteTask }: Props) => {
    return (
        <div className="flex justify-between items-end my-5">
            <div>
                <span>{task.taskName} </span>
            </div>

            <div className="flex gap-5 items-end">
                <div>
                    <span>{task.deadline}</span>
                </div>
                <div>
                    <button className="btn btn-sm btn-outline btn-warning" onClick={() => deleteTask(task.id)}>X</button>
                </div>
            </div>

        </div>
    )
}


