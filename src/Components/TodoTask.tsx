import { ITask } from '../Interfaces';

interface Props{
    task: ITask;
    deleteTask(id: number): void;
}
//  deleteTask(id: number): void;


export const TodoTask = ({task, deleteTask}: Props) => {
  return (
    <div>
      <div>
        <span>{task.taskName} </span>
        <span>{task.deadline}</span>
      </div>
        <button onClick={()=>deleteTask(task.id)}>X</button>
    </div>
  )
}


