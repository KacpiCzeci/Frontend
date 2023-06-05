import axios from 'axios';
import updateTodos from '../store/updateTodos';
import './AddTodo.css';
import { useState } from 'react';

export default function AddTodo() {
    const [valid, setValid] = useState(true);
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const addTodo = async (e) => {
        e.preventDefault();

        if(name != null && name !== '') {
            setValid(true);
            await axios.post(`/api/todos`, {
                text: name,
                done: false,
            }).then((response) => {
                updateTodos();
            });
            e.target.reset();
        }
        else {
            setValid(false);
        }
    };

    return(
        <form onSubmit={addTodo} className="relative">
            <input type="text" value={name} onChange={handleChange} className={`${valid ? 'valid' : 'invalid' } block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-white focus:outline-none focus:ring focus:ring-teal-400`} placeholder="Add Todo..."/>
            <button type="submit" className="absolute inset-y-0 left-0 flex items-center pl-3 hover:brightness-200 hover:scale-110">
                <img src="./add.svg" className="w-5 h-5 text-gray-500" alt="add.svg"/>
            </button>
        </form>
    );
}
    
