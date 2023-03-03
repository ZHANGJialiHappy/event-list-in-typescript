import { FC, ChangeEvent, useState, useReducer } from 'react';
import { TodoTask } from './Components/TodoTask';
import { Task, TaskAction, TaskActionKind, TaskState } from './Interfaces';


const InitialState = {
  list: []
}

function reducer(state: TaskState, action: TaskAction) {
  switch (action.type) {
    case TaskActionKind.ADD_TODO:
      return { 
        ...state, 
        list: [action.payload, ...state.list]
      }
    case TaskActionKind.DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(task => task.id !== action.payload.id)
      };
    case TaskActionKind.COMPLETE_TODO:
      return {...state,
      list: state.list.map((task)=>{
        if(task.id === action.payload.id) {
          return {...task, complete: !task.complete}
        }
        return task
      })};
    default:
      return state
  }
}


const App: FC = () => {

  const [taskName, setTaskName] = useState<string>("");
  const [deadline, setDeadline] = useState<number | string>(0);
  const [state, dispatch] = useReducer(reducer, InitialState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "TaskName") {
      setTaskName(event.target.value)
    } else {
      let value: number | string = event.target.value
      if (value) {
        setDeadline(Number(value))
      } else {
        setDeadline("")
        return
      }

    };
  }

  const addTask = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if ((!taskName || /^\s*$/.test(taskName)) || (typeof deadline === "string")) {
      return
    }
    dispatch({ type: TaskActionKind.ADD_TODO, payload: { taskName, deadline, complete: false, id: Math.random() } })
    setTaskName("");
    setDeadline(0);
  }

  const deleteTask = (id: number): void => {
    dispatch({ type: TaskActionKind.DELETE_TODO , payload: { id } })
  }

  const completeTask = (id: number): void => {
    dispatch({ type: TaskActionKind.COMPLETE_TODO, payload: { id}  })
  }

  return (
    <div className="flex justify-center items-start bg-gradient-to-br from-yellow-200 h-screen">
      <div className="flex flex-col justify-center mt-10 gap-y-5">
        <div className="text-center text-2xl">
          <h1>What a beautiful day!</h1>
        </div>
        <form className="flex gap-5 items-end" onSubmit={addTask}>
          <div>
            <label className="label">
              <span className="label-text">What is your task?</span>
            </label>
            <input type="text" placeholder="Task..." name="TaskName" className="input input-bordered input-warning w-full max-w-xs" onChange={handleChange} value={taskName} />
          </div>
          <div>
            <label className="label">
              <span className="label-text">How many days you need to finish?</span>
            </label>
            <input type="number" name="Deadline" min="1" step="1" className="input input-bordered input-warning w-full max-w-xs" onChange={handleChange} value={deadline} />
          </div>
          <div>
            <button className="btn btn-outline btn-warning">Add Task</button>
          </div>
        </form>
        <div>
          {state.list.map((task: Task, key: number) => {
            return <TodoTask task={task} key={key} deleteTask={deleteTask} completeTask={completeTask} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
