import {useState} from 'react'

export function NewTodoForm(){
    const[newItem, setNewItem] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setTodos(currentTodos =>{
          return[
            ...currentTodos,
            {id: crypto.randomUUID(), title: newItem, completed:false},
          ]
        })
        setNewItem("")
      }

     return <>
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <label htmlFor='item'></label>
            <input value={newItem} onChange = {e => setNewItem(e.target.value)} type="text" id="item"/>
            <button className="btn">Add</button>
            </div>
        </form>
    </>
}