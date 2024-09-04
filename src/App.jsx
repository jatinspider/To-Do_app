import { useState,useEffect } from 'react'

import { TodoProvider } from './Context'

import { TodoForm,TodoItem } from './Components'
function App() {
  const [Todos, setTodos] = useState([])
  
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id : Date.now() , ...todo},...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=> todo.id !== id))
  }
  useEffect(() => { 
     const todos = JSON.parse(localStorage.getItem("todos"))
     if (todos && todos.length>1) setTodos(todos)

  }, [])

  useEffect(()=>{ 
    localStorage.setItem("todos",JSON.stringify(Todos))
  },[Todos])
  
  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo)))
  }

  return (
    <TodoProvider value={{Todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
 <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-4xl font-extrabold text-center mb-8 mt-4 text-blue-600">Your To-Do List Manager</h1>

                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {Todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   
    </TodoProvider>
 
  )
}

export default App
