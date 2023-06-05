<script>
    import axios from 'axios';
    import { updateTodos, editedTodo } from '../store/store';

    export let todo;

    let input = todo.text;
    let valid = true;

    let init = (el) => {
        el.focus()
    }

    let toggleEdit = () => {
        editedTodo.set(todo._id);
        input = todo.text;
    }

    let setDone = async (done) => {
        let newTodo = todo;
        newTodo.done = done;
        await axios.put(`/api/todos/${todo._id}`, newTodo).then(() =>{
            updateTodos();
        });
        if($editedTodo===todo._id){
            closeEdit();
        }
    };

    let editElement = async () => {
        if(input != null && input != undefined && input !== '') {
            valid = true;
            let newTodo = todo;
            newTodo.text = input;
            await axios.put(`/api/todos/${todo._id}`, newTodo).then(() =>{
                closeEdit();
                updateTodos();
            });
        }
        else {
            valid = false;
        }
        
    };

    let deleteElement = async (id) => {
        await axios.delete(`/api/todos/${id}`).then(() =>{
            updateTodos();
        });
    };

    let closeEdit = () => {
        editedTodo.set('');
    };

</script>

<div class="flex flex-row justify-between my-4 border border-gray-500 rounded-xl p-4">
    {#if $editedTodo===todo._id}
        <div class="flex flex-row items-center">
            <input bind:value={input} use:init class="{valid ? 'valid' : 'invalid' } block w-full text-sm text-gray-900 rounded-lg bg-white"/>
            <button on:click={() => editElement()} class="pl-4 pr-2 hover:brightness-125 hover:scale-110">
                <img src="./approve.svg" width="20px" height="20px" alt="approve.svg"/>
            </button>
            <button on:click={() => closeEdit()} class="pl-2 pr-4 hover:brightness-125 hover:scale-110">
                <img src="./cancel.svg" width="20px" height="20px" alt="cancel.svg"/>
            </button>
        </div>
    {:else}
        <p class="{todo.done ? 'done' : ''} whitespace-nowrap text-ellipsis overflow-hidden">{todo.text}</p>
    {/if}
    <ul class="flex flex-row flex-shrink-0">
        <li class="mx-2">
            <button on:click={() => setDone(!todo.done)} class="hover:brightness-200 hover:scale-110">
                <img src="./done.svg" width="20px" height="20px" alt="done.svg"/>
            </button>
        </li>
        <li class="mx-2">
            <button on:click={() => toggleEdit()} class="hover:brightness-200 hover:scale-110">
                <img src="./edit.svg" width="20px" height="20px" alt="edit.svg"/>
            </button>
        </li>
        <li class="mx-2">
            <button on:click={() => deleteElement(todo._id)} class="hover:brightness-200 hover:scale-110">
                <img src="./delete.svg" width="20px" height="20px" alt="delete.svg"/>
            </button>
        </li>
    </ul>
</div>

<style>
    .done {
        @apply decoration-4 line-through decoration-red-800;
    }

    .valid {
        @apply border border-white ;
    }

    .valid {
        @apply outline-none ring ring-teal-400;
    }

    .invalid {
        @apply border-2 border-[#db4f4f];
        animation: shake 100ms ease-in-out;
    }

    @keyframes shake{
        0% { transform: translateX(0) }
        25% { transform: translateX(5px) }
        50% { transform: translateX(-5px) }
        75% { transform: translateX(5px) }
        100% { transform: translateX(0) }
    }
</style>