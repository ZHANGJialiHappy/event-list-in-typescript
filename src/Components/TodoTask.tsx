import { ITask } from '../Interfaces';

interface Props{
    task: ITask;
    deleteTask(id: number): void;
}
//  deleteTask(id: number): void;


export const TodoTask = ({task, deleteTask}: Props) => {
  return (
    <div className="menu bg-base-100 w-56">
      <div>
        <span>{task.taskName} </span>
        <span>{task.deadline}</span>
      </div>
        <button className="btn btn-outline" onClick={()=>deleteTask(task.id)}>X</button>
    </div>
  )
}


