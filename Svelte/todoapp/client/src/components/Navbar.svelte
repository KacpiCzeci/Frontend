<script>
    import { filter, showAddTodo } from '../store/store.js';

    var input = "";

    let updateFilter = () => {
        filter.set(input);
    };

    let openAddTodo = () => {
        showAddTodo.set(true);
    };
    

</script>

<nav class="sticky top-0 z-50 border-gray-200 bg-teal-500">
    <div class="flex flex-nowrap items-center justify-between p-4">
        <div class="flex items-center">
            <img src="./icon.svg" class="h-8 mr-3" alt="ToDo Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Todo List</span>
            <button on:click={openAddTodo} class="self-center mx-5 text-sm whitespace-nowrap text-white hover:text-gray-100">Add new</button>
        </div>
        <div class="flex md:order-2">
            <div class="relative hidden md:block">
                <input type="text" id="add-navbar" bind:value={input} on:input={updateFilter} class="block w-full p-2 pl-10 text-sm text-gray-900 border border-white rounded-lg bg-white focus:outline-none focus:ring focus:ring-teal-400" placeholder="Search Todo...">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="./search.svg" class="w-5 h-5 text-gray-500" aria-hidden="true" alt="Search icon" />
                </div>
            </div>
        </div>
    </div>
</nav>
  