import { ITask } from '../Interfaces';

interface Props{
    task: ITask;
    deleteTask(id: number): void;
}
//  deleteTask(id: number): void;


export const TodoTask = ({task, deleteTask}: Props) => {
  return (
<div className="overflow-x-auto">
  <table className="table w-full">
      <tbody>
      <th>{task.taskName} </th>
        <th>{task.deadline}</th>

      <button className="btn btn-outline btn-warning" onClick={()=>deleteTask(task.id)}>X</button>
      </tbody>

      </table>
</div>
  )
}


