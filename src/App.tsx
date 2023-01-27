import { FC, ChangeEvent, useState } from 'react';
import { TodoTask } from './Components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "Task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    };
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
      id: Math.floor(Math.random() * 10000)
    };
    if (!task || /^\s*$/.test(task)) {
      return
    }
    setTodoList([newTask, ...todoList]);
    setTask("");
    setDeadline(0);
  }

  const deleteTask = (id: number): void => {
    setTodoList(todoList.filter((task) => task.id !== id
    ))
  }

  return (
    <div className="flex justify-center">
    <div className="flex flex-col gap-y-5 justify-center">
      <div className="flex gap-5 items-end">
        <div>
          <label className="label">
            <span className="label-text">What is your task?</span>
          </label>
          <input type="text" placeholder="Task..." name="Task" className="input input-bordered input-warning w-full max-w-xs" onChange={handleChange} value={task} />
        </div>

        <div>
          <label className="label">
            <span className="label-text">How many days you need to finish?</span>
          </label>
          <input type="number" name="Deadline" className="input input-bordered input-warning w-full max-w-xs" onChange={handleChange} value={deadline} />
        </div>

        <div>
          <button className="btn btn-outline btn-warning" onClick={addTask}>Add Task</button>
        </div>
      </div>
        
      <div>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask task={task} key={key} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
    </div>
  );
}

export default App;
