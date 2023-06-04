<script>
    import axios from 'axios';
    import { form, field } from 'svelte-forms';
    import { required } from 'svelte-forms/validators';
    import { onMount } from 'svelte';
    import { showAddTodo, updateTodos } from '../store/store.js';

    const todoName = field('todoName', "", [required()]);
    const todoStatus = field('todoStatus', false, []);
    const todoForm = form(todoName, todoStatus);

    onMount(() => {
        todoForm.validate();
    });

    let init = (el) => {
        el.focus()
    }

    let addTodo = async () => {
        if($todoName.valid) {
            await axios.post(`/api/todos`, {
                text: $todoName.value,
                done: $todoStatus.value,
            }).then((response) => {
                updateTodos();
                todoForm.reset();
            });
        }
    };

    let closeAddTodo = () => {
        showAddTodo.set(false);
    };
    
</script>

<div class="fixed bottom-0 p-4 z-50 flex flex-row w-full justify-between bg-white border-t border-teal-500">
    <div class="flex flex-row bg-white">
        <button on:click={() => closeAddTodo()} class="px-4 hover:brightness-125 hover:scale-110">
            <img src="./close.svg" width="24px" height="24px" alt="close.svg"/>
        </button>
        <input type="text" id="add-navbar" bind:value={$todoName.value} use:init class="w-72 px-2 mx-3 text-sm text-gray-900 border border-teal-500 rounded-lg bg-white focus:outline-none focus:ring focus:ring-teal-400" placeholder="Add Todo...">
        <div class="flex flex-nowrap items-center">
            <input type="checkbox" name="check" id="check" bind:checked={$todoStatus.value}/>
            <label for="check" class="px-2">
                <div class="block">
                    {$todoStatus.value ? "Done" : "Todo"}
                </div>
            </label>
        </div>
    </div>
    <button on:click={() => addTodo()} class="bg-teal-500 rounded-full flex justify-center items-center flex-shrink-0 hover:bg-teal-300 hover:scale-110">
        <img src="./add.svg" width="36px" height="36px" alt="add.svg"/>
    </button>
</div>

<style>

</style>