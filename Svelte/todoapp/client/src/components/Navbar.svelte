<script>
    import { filter } from '../store/store.js';

    var input = "";

    let updateFilter = () => {
        filter.set(input);
    }
    

</script>

<nav class="border-gray-200 bg-teal-500">
    <div class="flex flex-nowrap items-center justify-between p-4">
        <div class="flex items-center">
            <img src="./icon.svg" class="h-8 mr-3" alt="ToDo Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Todo List</span>
        </div>
        <div class="flex md:order-2">
            <div class="relative hidden md:block">
                <input type="text" id="add-navbar" bind:value={input} on:input={updateFilter} class="block w-full p-2 pl-10 text-sm text-gray-900 border border-white rounded-lg bg-white focus:outline-none focus:ring focus:ring-teal-400" placeholder="Search Todo...">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="./search.svg" class="w-5 h-5 text-gray-500" aria-hidden="true" alt="Search icon" />
                </div>
            </div>
            <!-- <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button> -->
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search...">
            </div>
        </div>
    </div>
</nav>
  