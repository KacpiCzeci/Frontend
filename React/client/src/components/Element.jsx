import axios from 'axios';
import store from '../store/store.js';
import "./Element.css";
import { useState } from 'react';
import { useSelector } from "react-redux";
import updateTodos from "../store/updateTodos.js";


export default function Element({ todo }) {
    const [input, setInput] = useState(todo.text);
    const editedTodo = useSelector((state) => state.editedTodo);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const toggleEdit = () => {
        store.dispatch({ type: "setEditedTodo", content: todo._id });
        setInput(todo.text);
    }

    const setDone = async (done) => {
        let newTodo = todo;
        newTodo.done = done;
        await axios.put(`/api/todos/${todo._id}`, newTodo).then(() =>{
            updateTodos();
        });
        if(editedTodo===todo._id){
            closeEdit();
        }
    };

    const editElement = async () => {
        let newTodo = todo;
        newTodo.text = input;
        await axios.put(`/api/todos/${todo._id}`, newTodo).then(() =>{
            closeEdit();
            updateTodos();
        });
    };

    const deleteElement = async (id) => {
        await axios.delete(`/api/todos/${id}`).then(() =>{
            updateTodos();
        });
    };

    const closeEdit = () => {
        store.dispatch({ type: "setEditedTodo", content: '' });
    };

    return(
        <div className="flex flex-row justify-between my-4 border border-gray-500 rounded-xl p-4">
            {
                editedTodo===todo._id?
                    <div className="flex flex-row items-center">
                        <input value={input} onChange={handleChange}  autoFocus/>
                        <button onClick={() => editElement()} className="pl-4 pr-2 hover:brightness-125 hover:scale-110">
                            <img src="./approve.svg" width="20px" height="20px" alt="approve.svg"/>
                        </button>
                        <button onClick={() => closeEdit()} className="pl-2 pr-4 hover:brightness-125 hover:scale-110">
                            <img src="./cancel.svg" width="20px" height="20px" alt="cancel.svg"/>
                        </button>
                    </div>
                :
                    <p className="{todo.done ? 'done' : ''} whitespace-nowrap text-ellipsis overflow-hidden">{todo.text}</p>
            }
            <ul className="flex flex-row flex-shrink-0">
                <li className="mx-2">
                    <button onClick={() => setDone(!todo.done)} className="hover:brightness-200 hover:scale-110">
                        <img src="./done.svg" width="20px" height="20px" alt="done.svg"/>
                    </button>
                </li>
                <li className="mx-2">
                    <button onClick={() => toggleEdit()} className="hover:brightness-200 hover:scale-110">
                        <img src="./edit.svg" width="20px" height="20px" alt="edit.svg"/>
                    </button>
                </li>
                <li className="mx-2">
                    <button onClick={() => deleteElement(todo._id)} className="hover:brightness-200 hover:scale-110">
                        <img src="./delete.svg" width="20px" height="20px" alt="delete.svg"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}