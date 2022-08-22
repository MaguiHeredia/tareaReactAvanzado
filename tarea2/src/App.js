import React, {useEffect, useState} from 'react';
import useList from './hooks/useList';
import './App.css';


const App = () => {
  const tasks = useList([])
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    tasks.push(newTask)
    setNewTask('')
  }

  const handleChange = (ev) => {
    setNewTask(ev.target.value)
  } 

  return (
    <div className="App">
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(ev) => handleChange(ev)} placeholder='new task' value={newTask}></input>
       <button type='submit'> create Task</button>
      </form>
      {tasks.isEmpty() ? <p> Task list is empty</p>
      : <ul>
        <button onClick={() => tasks.reset()}>Reset List</button>
        <button onClick={() => tasks.sort()}>Sort List</button>
        <button onClick={() => tasks.reverse()}>Reverse List</button>
        {tasks.value.map((task, index) => {
          return (
            <li>
              {task}
              <button onClick={() => tasks.remove(index)}>x</button>
            </li>
          )
        })}
      </ul>
    }
    </div>
  );
}

export default App;
