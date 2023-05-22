<script>
    import axios from 'axios';

    export let todo;

    let editMode = false;
    let input = todo.text;

    let setDone = async (done) => {
        let newTodo = todo;
        newTodo.done = done;
        console.log(newTodo);
        const response = await axios.put(`/api/todos/${todo._id}`, newTodo);
        console.log(response);
    };

    let deleteElement = async (id) => {
        const response = await axios.delete(`/api/todos/${id}`);
    }

</script>

<div class="flex flex-row justify-between my-4 border border-gray-500 rounded-xl p-4">
    {#if !editMode}
        <p class={todo.done ? 'done' : ''}>{todo.text}</p>
    {:else}
        <input bind:value={input}/>
    {/if}
    <ul class="flex flex-row">
        <li class="mx-2">
            <button on:click={setDone(!todo.done)}>Done</button>
        </li>
        <li class="mx-2">
            <a href="#">Edit</a>
        </li>
        <li class="mx-2">
            <button on:click={deleteElement(todo._id)}>Delete</button>
        </li>
    </ul>
</div>

<style>
    .done {
        @apply decoration-4 line-through decoration-red-800;
    }
</style>