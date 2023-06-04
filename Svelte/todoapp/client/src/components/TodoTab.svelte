<script>
    import { todos } from '../store/store.js';
    import Element from './Element.svelte';

    var todosValues;
    todos.subscribe(value => {
        todosValues = value;
    });

</script>

<div class="grid grid-cols-1 mx-10 my-6">
    {#each todosValues as todo }
        <Element todo={todo}/>
    {/each}
</div>