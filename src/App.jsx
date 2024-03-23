import React from 'react';
import "./style.css"
import {useState} from "react"


function App() {
  const[newItem, setNewItem] = useState("");
  const[todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed:false},
      ]
    })
    document.getElementsByClassName("list")
  }

  return( 
  <>
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor='item'></label>
        <input value={newItem} onChange = {e => setNewItem(e.target.value)} type="text" id="item"/>
        <button className="btn">Add</button>
      </div>
    </form>
    <h1>Todo List</h1>
    <ul className="list"> 
        {todos.map(todo =>{
          return <>
          <li>
          <label>
          <input type="checkbox"/>
           {todo.title}
          </label>
          <button className='btn btn-danger'>Delete</button>
          </li>
        </>
        })}  
    </ul>
  </>
  )
}  

export default App;
