import { Children, createContext, useContext, useReducer } from "react";
import { tasksReducer } from "./src/myReducer";

const levelContext = createContext(null);

export function useLevelContext(){
    return useContext(levelContext)
}

let nextId = 3;
const initialTasks = [
{id: 0, text: 'Visit Kafka Museum'
, done: true},
{id: 1, text: 'Watch a puppet show'
, done: false},
{id: 2, text: 'Lennon Wall pic'
, done: false},
];
export const MyContext = ({children}) => {

    const [tasks, dispatch] = useReducer(tasksReducer,initialTasks)

  function handleAddTask(text) {
    dispatch(
      {
        type: 'added',
        id: nextId++,
        text
      }
    )
  }
  function handleDeleteTask(id) {
    dispatch(
      {
        type: 'delete',
        id
      }
    )
  }

  return (
    <levelContext.Provider value={{
        handleAddTask,
        handleDeleteTask,
        tasks
    }} >
        {children}
    </levelContext.Provider>
  )
}
