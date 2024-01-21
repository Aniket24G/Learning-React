import { useState, useEffect } from 'react'
import { ToDoProvider } from './Contexts/ToDoContext';
import { ToDoForm } from './Components/index'
import { ToDoItem } from './Components/index'

function App() {

  const [todos, setTodos] = useState([]);

  //to add the todos
  //get the previous state of the todos array, set current time as the id and todo as the todo
  //add the new todo in the previous state
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo },prev])
  }

  //to update the todos
  //get the previous state of the todos array
  //look for the id of the todo that you want to update
  //update the todo with new content based on the id
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  //to delete the todo
  //get the previous state of the todos array, 
  //filter the state with all the todos whose id did not match the given id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  //to change the complete status of the todo
  //get the prev state of todo array,
  //get all the todos, if the id of the todo matches the id we are looking for, then reverse the complete status of the that todo
  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        complete: !prevTodo.complete } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  return (
    <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='bg-gray-400 min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 text-blue-800 border border-b-4'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Let's do this...</h1>
          <div className='mb-4'>
            <ToDoForm />
          </div>
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {todos.map((todo) => (
            <div key={todo.id} className='w-full'>
              <ToDoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
