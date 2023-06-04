<script>
    import AddTodo from './AddTodo.svelte'; 
</script>

<nav class="sticky top-0 z-50 border-gray-200 bg-teal-500">
    <div class="flex flex-nowrap items-center justify-between p-4">
        <div class="flex items-center">
            <img src="./icon.svg" class="h-8 mr-3" alt="ToDo Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Todo List</span>
        </div>
        <div class="flex">
            <AddTodo/>
        </div>
    </div>
</nav>
  