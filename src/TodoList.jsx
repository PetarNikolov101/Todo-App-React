export function TodoList({todos, deleteItem, toggleTodo}){
    return <ul className="list"> 
        {todos.length === 0 && <h3>No todos</h3>}
        {todos.map(todo =>{
          return <>
          <li key={todo.id}>
          <label>
          <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
           {todo.title}
          </label>
          <button className='btn btn-danger' onClick={() => deleteItem(todo.id)}>Delete</button>
          </li>
        </>
        })}  
    </ul>
}