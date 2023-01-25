import {FC, ChangeEvent, useState} from 'react';
import './App.css';
import { TodoTask } from './Components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {

const [task, setTask] = useState<string>("");
const [deadline, setDeadline] = useState<number>(0);
const [todoList, setTodoList] = useState<ITask[]>([]);

const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  if(event.target.name==="Task"){
    setTask(event.target.value)
  } else {
    setDeadline(Number(event.target.value))
  };
}
// (event: ChangeEvent<HTMLInputElement>): void ; event.target.name; Number

const addTask = (): void =>{
  const newTask = {taskName: task, deadline: deadline };
  setTodoList([...todoList, newTask]);
  console.log(todoList);
}
// why it doesn't log first item.

  return (
    <div className="App">
      <div>
        <div>
        <input type="text" placeholder="Task..." name="Task" onChange={handleChange}/>
        <input type="number" placeholder="Deadline (in Days)..." name="Deadline" onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {todoList.map((task:ITask, key:number) => {
          return <TodoTask key={key}/>;
        })}
      </div>
    </div>
  );
}

export default App;
