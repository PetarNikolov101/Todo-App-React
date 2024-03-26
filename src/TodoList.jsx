import {TodoItem} from "./TodoItem"

export function TodoList({todos, deleteItem, toggleTodo}){
    return <ul className="list"> 
        {todos.length === 0 && <h3>No todos</h3>}
        {todos.map(todo =>{
          return <>
            <TodoItem todo = {todo} toggleTodo={toggleTodo} deleteItem = {deleteItem}/>
        </>
        })}  
    </ul>
}