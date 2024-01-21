import React, { useState } from 'react'
import { useTodo } from '../Contexts/ToDoContext';

function ToDoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.prevenDefault();

        if (!todo) return;
        // console.log(todo);
        addTodo({ todo, complete: false })
        setTodo("");
    }
    
    return (
        <>
            <form
                onSubmit={add} className='flex'>
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

export default ToDoForm