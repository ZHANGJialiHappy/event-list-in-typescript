export type Task = {
    taskName: string,
    deadline: number | string,
    id: number,
    complete: boolean
}

export interface TaskState {
    list: Task[];
  }

export enum TaskActionKind {
    ADD_TODO = "add_todo",
    DELETE_TODO = "delete_todo",
    COMPLETE_TODO = "complete_todo"
}
  
 export type TaskAction
    = { type: "add_todo"; payload: Task }
    | { type: "delete_todo"|"complete_todo"; payload: number }

