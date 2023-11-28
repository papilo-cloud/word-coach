import { useEffect, useReducer, useRef, useState } from "react";
import { MyContext, useLevelContext } from "../myContext";
import { getOnlineStatus } from "./getOnlineStatus.js";
import { useFormInput } from "./useFormInput";
import { useCounter } from "./useCounter";

function AddTask() {

  const [text, setText] = useState('')
  const {handleAddTask} = useLevelContext()

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask(text)
  }
  useEffect(() => {
    myRef.current.focus()
  },[])
  const myRef = useRef()
  console.log(myRef)
  function handleFocus (params) {
    // myRef.current.focus()
  }
  return(
    <>
    <form onSubmit={handleSubmit} >
      <input ref={myRef} type="text" value={text} onChange={e => {setText(e.target.value)}} />
    </form>
    <button onClick={handleFocus} >focus</button>
    </>
  )
}

function Tasklist() {
  const {handleDeleteTask, tasks} = useLevelContext();
  console.log(tasks)
  return(
    <div>
      <ul>
        {tasks.map(task => 
        <li key={task.id} >{task.text}{" "} <button
        onClick={() => handleDeleteTask(task.id)}>Delete</button> </li> )}
      </ul>
    </div>
  )
}
  

export const Apps = () => {
 
  const counter =  useCounter();
  return (
    <>
      <h1>Seconds passed: {counter}</h1>
    </>
  );
}

