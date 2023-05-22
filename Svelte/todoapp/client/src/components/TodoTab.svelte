<script>
    import { filter, todos } from '../store/store.js';
    import Element from './Element.svelte';

    var todosValues;
    todos.subscribe(value => {
        todosValues = value;
    });

    var filterValue;
    filter.subscribe(value => {
        filterValue = value;
    });

</script>

<div class="grid grid-flow-row mx-10 my-6">
    {#each todosValues.filter(item => item.hasOwnProperty('text') && item.text.includes(filterValue)) as todo }
        <Element todo={todo}/>
    {/each}
</div>