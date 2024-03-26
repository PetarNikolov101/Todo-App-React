import React from 'react'
import "./style.css"
import {useState} from "react"
import { NewTodoForm } from './NewTodoForm'
import {TodoList} from './TodoList'


function App() {
  const[todos, setTodos] = useState([]);

  function addTodo(title){
    setTodos(currentTodos=>{
      return[
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }
  function deleteItem(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }
  function toggleTodo(id, completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo =>{
        if(todo.id == id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  return( 
  <>
    <NewTodoForm onSubmit ={addTodo}/>
    <h1>Todo List</h1>
    <TodoList todos = {todos} deleteItem = {deleteItem} toggleTodo = {toggleTodo}/>
  </>
  )
}  

export default App;
