import React from 'react';
import { ITask } from '../Interfaces';

interface Props{
    task: ITask;
}


export const TodoTask = ({task}: Props) => {
  return (
    <div>
      <div>
        <span>{task.taskName} </span>
        <span>{task.deadline}</span>
      </div>
        <button>X</button>
    </div>
  )
}


