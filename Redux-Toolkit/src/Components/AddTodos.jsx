import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'

function AddTodos() {
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo('');
    }

    return (
        <>
            <form
                onSubmit={addTodoHandler} className='flex'>
                <input type="text"
                    placeholder='I want to do..'
                    className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white text-black py-1.5'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} />
                <button className='rounded-r-lg px-3 py-1 bg-green-500 text-white shrink-0 border'
                    type='submit'>
                    Add
                </button>
            </form>
        </>
    )
}

export default AddTodos