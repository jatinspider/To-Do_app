import React, { useState } from 'react'
import { useTodo } from '../Context'


function TodoForm() {
    const [todo,SetTodo] = useState("")
    const {addTodo} = useTodo()
 
    const add = (e)=>{
        e.preventDefault()
        if(!todo) return 
        addTodo({todo,completed : false})
        SetTodo("")

    }
     

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/0 rounded-l-lg px-3 outline-none duration-150 py-1.5 text-black"
                value={todo}
                onChange={(e)=>SetTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 hover:bg-blue-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

